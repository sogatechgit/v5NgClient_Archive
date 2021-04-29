import { AppMainServiceService } from './../../svc/app-main-service.service';
import { FormCommon } from './../form.common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freespan',
  templateUrl: './freespan.component.html',
  styleUrls: ['./freespan.component.scss']
})
export class FreespanComponent  extends FormCommon implements OnInit{

  constructor(public dataSource:AppMainServiceService) {
    super(dataSource);
  }

  ngOnInit(): void {
  }

}


export interface ISurveyEvent{
  type:string;
  startKp:number;
  endKp:number;
  Kp:number;
  length:number;
  height:number;
  startSurface:string;
  interSurface:string;
  endSurface:string;
}
