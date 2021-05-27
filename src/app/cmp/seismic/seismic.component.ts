import { AppMainServiceService } from './../../svc/app-main-service.service';
import { FormCommon } from './../form.common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  public markerSize: number = 12;
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

  get showMap(): boolean {
    return this._mapConfig == null || this._mapContours == null ? false : true;
  }


  get viewBox(): string {
    //return `${this.viewLeft} ${this.viewTop} ${this.viewWidth} ${this.viewHeight}`;
    //return '0 0 702.39001 1209.4381';
    return `${0} ${0} ${this.mapWidth} ${this.mapHeight}`;
  }

  get viewLeft(): number {
    // return 0
    return 0;
  }
  get viewTop(): number {
    // return 0
    return 480;
    // return this.nativeHeight/4;
  }
  get viewWidth(): number {
    return this.nativeWidth;
    // return this.nativeWidth * 480 / this.nativeHeight;
  }

  get viewHeight(): number {
    // return this.nativeHeight;
    return 300;
    // return this.nativeHeight/2;
  }



  get fullFactor(): number {
    return 1;
  };
  get mapWidth(): number {
    return this.nativeWidth;
    // return this.nativeWidth * this.fullFactor;
    // return this.wrapWidth;
  }
  get mapHeight(): number {
    return this.nativeHeight;
    // return this.nativeHeight * this.fullFactor;
    // return this.wrapHeight;
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
    return `viewBox: ${this.viewBox}, width: ${this.wrapWidth}, height: ${this.wrapHeight}`
  }

  public width: number = 900;
  public height: number = 600;

  InitD3US(){
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

    console.log("SVG:" ,svg);

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
      d3.json('https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json').then(data=>{
      console.log("DATA: ",data);

      const result:any = data;

      // const paths:any = topojson.feature(result, result.objects);
      const paths:any = d3.geoPath().projection(projection);
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
          this._mapContours = result.data.filter(item=>!item.isGrid);
          this._mapGridLines= result.data.filter(item=>item.isGrid);

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


export enum SVG_TYPE {
  PATH = 'path',
  RECTANGLE = 'rect',
  LINE = 'line',
  CIRCLE = 'circle',
  POLYLINE = 'polyline',
}
