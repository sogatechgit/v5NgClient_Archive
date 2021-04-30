import { AppMainServiceService } from './../../svc/app-main-service.service';
import { FormCommon } from './../form.common';
import { Component, OnInit } from '@angular/core';
import { AppDataset } from 'src/app/svc/app-dataset.service';
import { RequestParams } from 'src/app/api/mod/app-params.model';

@Component({
  selector: 'app-freespan',
  templateUrl: './freespan.component.html',
  styleUrls: ['./freespan.component.scss']
})
export class FreespanComponent extends FormCommon implements OnInit {

  private _pipes: Array<IPipe> = [];
  get pipes(): Array<IPipe> {
    return this._pipes;
  }

  private _surveys: Array<ISurvey> = [];
  get surveys(): Array<ISurvey> {
    return this._surveys;
  }

  constructor(public dataSource: AppMainServiceService) {
    super(dataSource);
  }

  ngOnInit(): void {

    // Extract survey records

    const params: Array<RequestParams> = [
      { code: 'svy', sortFields: '-SVY_MAIN_DATE_START', includedFields: 'SVY_MAIN_ID`SVY_MAIN_TITLE`SVY_MAIN_DATE_START`SVY_MAIN_DATE_END' },
      { code: 'node', includedFields: 'REC_TAG`NODE_ID`NODE_DESC', filter: `{REC_TAG|in|${this.pipelineIds}}` }
    ];



    this.ds.Get(params, {
      onSuccess: data => {
        console.log(data);
        const svys: Array<ISurvey> = [];

        const surveyElement = 0;
        const pipelinesElement = 1;

        data.processed.data[surveyElement].forEach(svy => {
          svys.push({ id: svy.SVY_MAIN_ID, name: svy.SVY_MAIN_TITLE, active: false, events: [] })
        })

        this._surveys = svys;
        
        const pps: Array<IPipe> = [];
        data.processed.data[pipelinesElement].forEach(pipe => {
          pps.push({ id: pipe.REC_TAG, code: pipe.NODE_ID, name: pipe.NODE_DESC })
        })

        this._pipes = pps;

      }
    })

    console.log("pipelineIds: ", this.pipelineIds)

  }

  get ds(): AppDataset {
    return this.dataSource.ActiveSource.appDataset;
  }

  get pipelineIds(): string {
    return this.ds.tblNodesAttrib.clientConfig.pipelineIds;
  }

  ShowData(event: any) {
    console.log('Show span data...')
  }

  ChooseSurveys(event: any) {
    console.log('Choose survey ...')
  }


}

export interface ISurveyEvent {
  type: string;
  startKp: number;
  endKp: number;
  Kp: number;
  length: number;
  height: number;
  startSurface: string;
  interSurface: string;
  endSurface: string;
}

export interface IPipe {
  id: number;
  code: string;
  name: string;
}

export interface ISurvey {
  id: number;
  name: string;
  active: boolean;
  type?: number;
  startDate?: Date;
  endDate?: Date;
  events: Array<ISurveyEvent>;
}



/*
  SAPL ----
  var data = [
           ["0", "Select a pipeline ..."],
           ["294", "AU.PRL.031-FL-001 - Production Flowline 1"],
           ["307", "AU.PRL.031-FL-002 - Production Flowline 2"],
           ["319", "AU.PRL.032-FL-003 - Production Flowline 3"],
           ["330", "AU.PRL.032-FL-001 - Production Flowline 4"]
           ]

  SPEX ----
    var data = [
            ["9640", "MA03 - Gas Export Pipeline"],
            ["6413", "MA04 - Condensate Export Pipeline"],
            ["9607", "MA0B - Two-Phase Flowline No. 1"],
            ["9615", "MA0A - Two-Phase Flowline No. 2"]
    ]
 */