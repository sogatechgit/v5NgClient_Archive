import { AppMainServiceService } from './../../svc/app-main-service.service';
import { FormCommon } from './../form.common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as topojson from "topojson-client";


import * as d3 from 'd3';
import * as d3S from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

//import * as t from 'topojson';


@Component({
  selector: 'app-seismic',
  templateUrl: './seismic.component.html',
  styleUrls: ['./seismic.component.scss', './../module.common.scss']
})
export class SeismicComponent extends FormCommon implements OnInit, AfterViewInit {

  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('svg') svg: ElementRef;


  @Input() pxPerLong: number = 72.2;
  @Input() pxPerLat: number = 73.75;


  @Input() firstGridLong: number = undefined;  // x pos v-line
  @Input() firstGridLat: number = undefined;   // y pos h-line

  @Input() refGridLong: number = 119;  // x pos v-line
  @Input() refGapLong: number = 1;
  @Input() refDirectionLong: string = "E";
  @Input() refGridLongPx: number = 151;  // x pos v-line

  @Input() refGridLat: number = 10;   // y pos h-line  
  @Input() refDirectionLat: string = "N";
  @Input() refGapLat: number = -1;
  @Input() refGridLatPx: number = 815;   // y pos h-line  

  // @Input() gridColor: string = 'red';
  // @Input() gridWidth: number = 2;

  @Input() gridColor: string = '#a0a0a0';
  // @Input() gridLabelColor: string = '#a0a0a0';
  @Input() gridLabelColor: string = 'white';

  @Input() gridWidth: number = 0.5;
  constructor(public dataSource: AppMainServiceService, public http: HttpClient) {
    super(dataSource);
  }

  ngOnInit(): void {
    this.InitMap();
    // this.InitMapD3();
    // this.InitD3US();

  }

  ngAfterViewInit() {
    setTimeout(() => {
      //const facWidth = this.wrapWidth / 
      console.log(`Wrapper: w:${this.wrapWidth}, h:${this.wrapHeight}`)

      // this.InitMapD3();

    })
  }

  public dashWidth: number = 1.2;

  private _markerSize: number = 10;
  get markerSizeNative(): number {
    return this._markerSize;
  }
  @Input() set markerSize(value: number) {
    this._markerSize = value;
  }
  get markerSize(): number {
    //return this._markerSize;
    // return this.wrapWidth / 50;
    return this._markerSize * this.scaleFactor;
  }

  get gridLabelSize():string{
    return `${this.markerSize * 1.1}px`
  }

  get scaleFactor(): number {
    //const hf = this.mapeWidth / this.viewWidth;
    // return  this.mapHeight / this.nativeHeight;

    //this.viewWidth

    // const hf = this.nativeHeight / this.mapHeight;
    // const wf = this.nativeWidth / this.mapWidth;

    const hf = this.viewHeight / this.mapHeight;
    const wf = this.viewWidth / this.mapWidth;
    return Math.max(hf, wf);
  }

  get markerSizeHalf(): number {
    return this.markerSize / 2.0
  };

  private _mapContours: Array<ICountour> = null;
  get mapContours(): Array<ICountour> {
    if (!this._mapContours) return [];
    return this._mapContours;
  }
  private _mapGridLines: Array<ICountour> = null;
  get mapGridLines(): Array<ICountour> {
    if (!this._mapGridLines) return [];
    return this._mapGridLines;
  }

  private _mapConfig: any = null;
  get mapConfig(): any {
    if (!this._mapConfig) return [];
    return this._mapConfig;
  }

  get gridReady(): boolean {
    // return this._longLines.length != 0;
    return this.longLines.length != 0 && this.latLines.length != 0;
  }

  get firstGridLongCalc(): number {
    return !this.firstGridLong ? this.refGridLongPx % this.pxPerLong : this.firstGridLong;
  }
  get firstGridLatCalc(): number {
    return !this.firstGridLat ? this.refGridLatPx % this.pxPerLat : this.firstGridLat;
  }

  get firstLatCalc(): number {
    const px = this.firstGridLatCalc;
    const ht = this.refGridLatPx - px;
    // return  px;
    // return  (ht / this.pxPerLat) * this.refGapLat;
    return this.refGridLat - (ht / this.pxPerLat) * this.refGapLat;
  }

  get firstLongCalc(): number {
    const px = this.firstGridLongCalc;
    const wd = this.refGridLongPx - px;
    // return  px;
    // return  (ht / this.pxPerLat) * this.refGapLat;
    return this.refGridLong - (wd / this.pxPerLong) * this.refGapLong;
  }


  private _longLines: Array<IGridLine> = [];
  get longLines() {
    if (this._longLines.length == 0 && this.nativeWidth != 0) {
      const firstGridLong = this.firstGridLongCalc;
      const firstLong = this.firstLongCalc;

      /**
       *       const firstGridLat = this.firstGridLatCalc;
      const firstLat = this.firstLatCalc;
       */

      const wd = this.nativeWidth - firstGridLong;
      const ret: Array<IGridLine> = [];

      const gridCountFloat = String(wd / this.pxPerLong);
      const gridCount = parseInt(gridCountFloat) + (wd % this.pxPerLong ? 1 : 0);

      for (let idx = 0; idx < gridCount; idx++) {

        ret.push({
          px: this.toFixNum(firstGridLong + idx * this.pxPerLong, 3),
          text: `${firstLong + idx * this.refGapLong} ${this.refDirectionLong}`
        })
      }
      console.log("LONG LINES: ", ret);

      this._longLines = ret;
    }
    return this._longLines
  }
  private _latLines: Array<IGridLine> = [];
  get latLines() {
    if (this._latLines.length == 0 && this.nativeHeight != 0) {
      console.log("**** 1CALC LAT/LONG : ", this.firstLatCalc, this.firstLongCalc,", longToPx:",this.longToPx(22))

      const firstGridLat = this.firstGridLatCalc;
      const firstLat = this.firstLatCalc;

      const ht = this.nativeHeight - firstGridLat;
      const ret: Array<IGridLine> = [];

      const gridCountFloat = String(ht / this.pxPerLat);
      const gridCount = parseInt(gridCountFloat) + (ht % this.pxPerLat ? 1 : 0)

      // get initial latitude text

      for (let idx = 0; idx < gridCount; idx++) {
        ret.push({ px: this.toFixNum(firstGridLat + idx * this.pxPerLat, 3), text: `${firstLat + idx * this.refGapLat} ${this.refDirectionLat}` })
      }

      console.log("LAT LINES: ", ret);

      this._latLines = ret;
    }
    return this._latLines;

    /**
     * <line *ngIf="path.y != undefined" fill="none" [attr.stroke]="path.strokeColor ? path.strokeColor : 'black'"
                [attr.stroke-width]="path.strokeWidth ? path.strokeWidth : 1" [attr.x1]="0" [attr.y1]="path.y"
                [attr.x2]="nativeWidth" [attr.y2]="path.y" stroke-linecap="round" stroke-linejoin="round"
                stroke-miterlimit="10" />
     */
  }

  get showMap(): boolean {
    return this._mapConfig == null || this._mapContours == null ? false : true;
  }


  get viewBox(): string {
    return `${this.viewLeft} ${this.viewTop} ${this.viewWidth} ${this.viewHeight}`;

    // return `${0} ${0} ${this.mapWidth} ${this.mapHeight}`;

    return `0 0 ${this.nativeWidth} ${this.nativeHeight}`;
  }

  get viewLeft(): number {
    return 0
    // return 200;
  }
  get viewTop(): number {
    return 0
    return 350;
    // return this.nativeHeight/4;
  }
  get viewWidth(): number {
    // return 480;
    return this.nativeWidth - this.viewLeft;
    // return this.nativeWidth * 480 / this.nativeHeight;
  }

  get viewHeight(): number {
    // return 500;
    return this.nativeHeight - this.viewTop;
    // return this.nativeHeight/2;
  }



  get fullFactor(): number {
    return 1;
  };
  get mapWidth(): number {
    // return this.nativeWidth;

    // return this.nativeWidth * this.fullFactor;

    // return this.viewWidth

    // return Math.max(this.wrapWidth,this.viewWidth);

    return this.wrapWidth;
  }
  get mapHeight(): number {
    //  return this.nativeHeight;
    // return this.nativeHeight * this.fullFactor;

    // return Math.max(this.wrapHeight,this.viewHeight);
    return this.wrapHeight;
  }

  get nativeWidth(): number {
    return this._mapConfig ? +this._mapConfig.nativeWidth : 0;
  }

  get nativeHeight(): number {
    return this._mapConfig ? +this._mapConfig.nativeHeight : 0;
  }

  get wrapWidth(): number {
    if (!this.wrapper) return 0;
    return this.wrapper.nativeElement.offsetWidth;
  }
  get wrapHeight(): number {
    if (!this.wrapper) return 0;
    return this.wrapper.nativeElement.offsetHeight;
  }

  get debugMessage(): string {
    return `viewBox: ${this.viewBox}, width: ${this.wrapWidth}, height: ${this.wrapHeight}, markerSize: ${this.markerSize}, 1tor: ${this.scaleFactor}, wf: ${this.nativeWidth / this.mapWidth}`
  }

  public width: number = 900;
  public height: number = 600;

  toFixNum(num: any, places?: number) {
    if (places == undefined) places = 2;
    return parseFloat((num).toFixed(places))
  }

  longToPx(long: number): number {
    // NS
    const pxFirst = this.firstGridLongCalc;
    return pxFirst;
  }
  latToPx(lat: number): number {
    // EW
    return -1;
  }

  InitD3US() {
    // const width = 900;
    // const height = 600;
    // const svg = d3.select("body").append("svg")
    //     .attr("width", width)
    //     .attr("height", height);

    // const projection = d3.geoAlbersUsa()
    //     .translate([width / 2, height / 2]) // translate to center of screen
    //     .scale(1000); // scale things down so see entire US

    // const path = d3.geoPath().projection(projection);

    // d3.json('https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json')
    //   .then(data=>{
    //     svg.selectAll('path')
    //     .data(uState.features)
    //     .enter()
    //     .append('path')
    //     .attr("d", path)

    //   });


  }

  InitMapD3() {
    const width = 1366;
    const height = 800;

    // const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);
    // const svg = d3.select('#map_svg');

    const svg = d3.select('#map_wrapper').select('svg');

    // const svg = d3.select('#map_wrapper').html('<svg width="900" height="600"></svg>').select('svg');
    // const svg = d3.select('#map_wrapper').html('<svg width="900" height="600"></svg>').select('svg');
    // d3.select('#map_wrapper').html('<svg></svg>')

    console.log("SVG:", svg);

    // const projection = d3.geoMercator().scale(140).translate([width / 2, height / 1.4]);
    // const projection = d3.geoAlbersUsa()
    // .translate([width / 2, height / 2]) // translate to center of screen
    // .scale([1000]);

    const projection = d3.geoAlbersUsa()
      .translate([width / 2, height / 2]) // translate to center of screen
      .scale(1000);

    const path = d3.geoPath(projection);

    const g = svg.append('g');

    //worldmap.json
    // d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    //"https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json
    // d3.json('./assets/seismic/provinces.json?v=1').then(data=>{
    d3.json('https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json').then(data => {
      console.log("DATA: ", data);

      const result: any = data;

      // const paths:any = topojson.feature(result, result.objects);
      const paths: any = d3.geoPath().projection(projection);
      // const countries:any = topojson.feature(result, result.features);

      // console.log("G: ",g, countries,path)

      g.selectAll('path').data(paths.features).enter()
        .append('path').attr('class', 'country').attr('d', path);

    })


    // return new Promise<void>((resolve, reject) => {
    //   ////do your initialisation stuff here
    //   const path = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
    //   // const path = './assets/seismic/worldmap.json';

    //   const subs = this.http.get(path).subscribe(
    //     (result: any) => {
    //       console.log('\nSEISMIC SUCCESS RESULT', result);

    //       // this._mapConfig = result.config;
    //       // this._mapContours = result.data;

    //       const countries: any = topojson.feature(result, result.objects.countries);
    //       g.selectAll('path').data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);

    //       resolve();
    //       subs.unsubscribe();
    //     },
    //     (error) => {
    //       console.log('\nERROR RESULT', error);

    //       subs.unsubscribe();
    //       reject(error);
    //     }
    //   );
    // }).catch((err) => {
    //   console.log('\nERROR RESULT err', err);
    // });

    // d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    //   .then(data => {

    //     const countries = t.feature(data, data.objects.countries);
    //     g.selectAll('path').data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);

    //   });
  }

  InitMap() {

    // return new Promise<void>((resolve, reject) => {
    //   ////do your initialisation stuff here
    //   const path = './assets/seismic/worldmap.json';
    //   const subs = this.http.get(path).subscribe(
    //     (result: any) => {
    //       console.log('\nSEISMIC SUCCESS RESULT', result);

    //       // this._mapConfig = result.config;
    //       // this._mapContours = result.data;

    //       resolve();
    //       subs.unsubscribe();
    //     },
    //     (error) => {
    //       console.log('\nERROR RESULT', error);

    //       subs.unsubscribe();
    //       reject(error);
    //     }
    //   );
    // }).catch((err) => {
    //   console.log('\nERROR RESULT err', err);
    // });


    return new Promise<void>((resolve, reject) => {
      ////do your initialisation stuff here
      const path = './assets/seismic/seismicmap.json';
      const subs = this.http.get(path).subscribe(
        (result: any) => {
          console.log('\nSEISMIC SUCCESS RESULT', result);


          this._mapConfig = result.config;
          this._mapContours = result.data.filter(item => !item.isGrid);
          this._mapGridLines = result.data.filter(item => item.isGrid);

          resolve();
          subs.unsubscribe();
        },
        (error) => {
          console.log('\nERROR RESULT', error);

          subs.unsubscribe();
          reject(error);
        }
      );
    }).catch((err) => {
      console.log('\nERROR RESULT err', err);
    });

  }

  ctrType(contour: ICountour): string {
    return contour.type ? contour.type : 'path';
  }

  isPath(contour: ICountour): boolean {
    return this.ctrType(contour) == SVG_TYPE.PATH;
  }
  isRect(contour: ICountour) {
    return this.ctrType(contour) == SVG_TYPE.RECTANGLE;
  }
  isLine(contour: ICountour) {
    return this.ctrType(contour) == SVG_TYPE.LINE;
  }
  isPoly(contour: ICountour) {
    return this.ctrType(contour) == SVG_TYPE.POLYLINE;
  }

}

export interface ICountour {
  id: string;         // id
  title: string;      // title
  d?: string;          // path
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  type?: string;
  x?: number;
  y?: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  width?: number;
  height?: number;
  points?: string;
}
export interface IGridLine {
  text: string;      // title
  px: number;
}


export enum SVG_TYPE {
  PATH = 'path',
  RECTANGLE = 'rect',
  LINE = 'line',
  CIRCLE = 'circle',
  POLYLINE = 'polyline',
}
