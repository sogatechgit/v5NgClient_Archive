import { AppMainServiceService } from './../../svc/app-main-service.service';
import { FormCommon } from './../form.common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seismic',
  templateUrl: './seismic.component.html',
  styleUrls: ['./seismic.component.scss', './../module.common.scss']
})
export class SeismicComponent extends FormCommon implements OnInit, AfterViewInit {

  @ViewChild('wrapper') wrapper: ElementRef;

  constructor(public dataSource: AppMainServiceService, public http: HttpClient) {
    super(dataSource);
  }

  ngOnInit(): void {
    this.InitMap();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      //const facWidth = this.wrapWidth / 
      console.log(`Wrapper: w:${this.wrapWidth}, h:${this.wrapHeight}`)
    })
  }

  public dashWidth:number = 1.2;
  public markerSize:number = 12;
  get markerSizeHalf():number{
    return this.markerSize / 2.0
  };

  private _mapContours: Array<ICountour> = null;
  get mapContours(): Array<ICountour> {
    if (!this._mapContours) return [];
    return this._mapContours;
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
    return `${this.viewLeft} ${this.viewTop} ${this.viewWidth} ${this.viewHeight}`;
    // return '0 0 702.39001 1209.4381';
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
    // return this.nativeWidth * this.fullFactor;
    return this.wrapWidth;
  }
  get mapHeight(): number {
    // return this.nativeHeight * this.fullFactor;
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

  get debugMessage():string{
    return `viewBox: ${this.viewBox}, width: ${this.wrapWidth}, height: ${this.wrapHeight}`
  }

  InitMap() {

    return new Promise<void>((resolve, reject) => {
      ////do your initialisation stuff here
      const path = './assets/seismic/seismicmap.json';
      const subs = this.http.get(path).subscribe(
        (result: any) => {
          console.log('\nSEISMIC SUCCESS RESULT', result);

          this._mapConfig = result.config;
          this._mapContours = result.data;

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
  points?:string;
}


export enum SVG_TYPE {
  PATH = 'path',
  RECTANGLE = 'rect',
  LINE = 'line',
  CIRCLE = 'circle',
  POLYLINE = 'polyline',
}
