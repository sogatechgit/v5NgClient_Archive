import { AppMainServiceService } from './../../svc/app-main-service.service';
import { FormCommon } from './../form.common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppDataset } from 'src/app/svc/app-dataset.service';
import { RequestParams } from 'src/app/api/mod/app-params.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SurveySelectComponent } from './survey-select.component';
import { DetailsPopup } from 'src/app/api/cmp/details.popup';

@Component({
  selector: 'app-freespan',
  templateUrl: './freespan.component.html',
  styleUrls: ['./freespan.component.scss']
})
export class FreespanComponent extends FormCommon implements OnInit {

  private SPAN_EVENTS: string = "25,26,";

  private _pipes: Array<IPipe> = [];
  get pipes(): Array<IPipe> {
    return this._pipes;
  }

  private _surveys: Array<ISurvey> = [];
  get surveys(): Array<ISurvey> {
    return this._surveys;
  }

  constructor(public dialog: MatDialog, public dataSource: AppMainServiceService) {
    super(dataSource);
  }

  @ViewChild('pipeSelect') pipeSelect: ElementRef;

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

  get currentPipe(): number {
    if (!this.pipeSelect) return -1;
    return this.pipeSelect.nativeElement.value;
  }

  get currentSurveys(): string {
    const ids: Array<number> = [];
    const actsvy = this.surveys.filter(svy => svy.active);
    actsvy.forEach(svy => ids.push(svy.id))

    return ids.join(',');
  }

  ShowData(event: any) {
    console.log('Show span data...')
  }

  ChooseSurveys(event: any) {
    console.log('Choose survey ...');

    const actsvy = this.surveys.filter(svy => (svy.id == 1 || svy.id == 68))
    console.log("ActiveSurveys: ", actsvy)
    actsvy.forEach(svy => svy.active = true);

    const pipeId = this.currentPipe;
    const svyIds = this.currentSurveys;

    if (+pipeId == 0) {
      console.log('No pipeline selected!');
      return;
    }

    if (!svyIds) {
      console.log('No campaign(s) selected!');
      return;
    }

    console.log("pipeId: ", pipeId, ", svyIds: ", svyIds)

    const params: Array<RequestParams> = [
      // {
      //   code: 'svyhdr|`svypos@SP,SVY_HDR_START_POS_ID,SVY_POS_ID;`svypos@EP,SVY_HDR_END_POS_ID,SVY_POS_ID;',
      //   includedFields: 'SVY_HDR_MAIN_ID`SP.SVY_POS_KP@ks`EP.SVY_POS_KP@ke`SVY_HDR_COLOUR`SVY_INTEGER_A@ht`SVY_SINGLE_A@ln`SVY_TEXT_A@sts`SVY_TEXT_B@ste`SVY_TEXT_C@sti`SVY_HDR_EVT_ID@tp',
      //   filter: `{SVY_HDR_MAIN_ID|in|${svyIds}}^{SVY_HDR_NOD_ID|${pipeId}}^({SVY_HDR_EVT_ID|in|25,26,5,41}|({SVY_HDR_EVT_ID|1}^{SVY_TEXT_B|Strake}))`,
      //   sortFields: '-SVY_HDR_MAIN_ID',
      //   snapshot: true
      // }
      {
        code:'vwfspan',
        filter: `{SP_SV|in|${svyIds}}^{SP_LOC|${pipeId}}`,
        snapshot:true
      }
    ]


    this.ds.Get(params, {
      onSuccess: data => {
        console.log("Spans extracted: ", data)

      }, onError: err => {
        console.log("Error: ", err)
      }
    });

    return;

    const subsSelect = this.OpenSurveySelect().subscribe(
      (data) => {
        console.log('ChooseSurveys: ', data);
        // if (data.value == 'accept' || data.value == 'ok') {
        //   const compData = data.sender.data.component.data;
        //   //compData.form.value.recordType
        //   const recordType = compData.form.value.recordType;
        //   const rti = this.RecordTypeInfo;
        //   const defVal: any = {};
        //   if (rti.recordTypeOptions) {
        //     defVal[rti.recordTypeField] = recordType;
        //     if (rti.recordTypeGroupField) {
        //       const opt = rti.recordTypeOptions.find(
        //         (o) => o.key == recordType
        //       );
        //       if (opt) defVal[rti.recordTypeGroupField] = opt.group;
        //     }
        //   }
        //   this.OpenAddRecord({ e: e, data: data, defaultValues: defVal });
        // }
      },
      (err) => {
        console.log('\nOpenRecordTypeSelect, Error ', err);
      },
      () => subsSelect.unsubscribe()
    );

  }

  ExtractData() {
    /*
    
    svyhdr|`svypos@SP,SVY_HDR_START_POS_ID,SVY_POS_ID;`svypos@EP,SVY_HDR_END_POS_ID,SVY_POS_ID;
    
    SVY_HDR_MAIN_ID`SP.SVY_POS_KP@ks`EP.SVY_POS_KP@ke`SVY_HDR_COLOUR`SVY_INTEGER_A@ht`SVY_SINGLE_A@ln`SVY_TEXT_A@sts`SVY_TEXT_B@ste`SVY_TEXT_C@sti`SVY_HDR_EVT_ID@tp
    
    {SVY_HDR_MAIN_ID|in|1}^{SVY_HDR_NOD_ID|9640}^({SVY_HDR_EVT_ID|in|25,26,5,41}|({SVY_HDR_EVT_ID|1}^{SVY_TEXT_B|Strake}))
    
    -SVY_HDR_MAIN_ID
    
    */

    const params: Array<RequestParams> = [
      { code: 'svy', sortFields: '-SVY_MAIN_DATE_START', includedFields: 'SVY_MAIN_ID`SVY_MAIN_TITLE`SVY_MAIN_DATE_START`SVY_MAIN_DATE_END' },
      { code: 'node', includedFields: 'REC_TAG`NODE_ID`NODE_DESC', filter: `{REC_TAG|in|${this.pipelineIds}}` }
    ];


  }

  OpenSurveySelect(): Observable<any> {
    const tbl = this.sourceTable;
    const ref = this.dialog.open(DetailsPopup, {
      minWidth: '800px',
      minHeight: '600px',
      disableClose: false,
      data: {
        // data belonging to popup
        component: {
          // params of popup component
          component: SurveySelectComponent,
          data: {
            hostObject: this,
            // defaultValue: this.RecordTypeSelectDefault,
            // form: new FormGroup({}),
            // tableConfig: tbl.TableConfig,
            // recordTypeOptions: tbl.recordTypeOptions,
            // moduleExchangeInfo: this.moduleExchangeInfo,
          },
        },
        title: 'Select survey(s) to plot',
        // buttons: this.dataSet.btnCancelAccept,
        icon: 'fa fa-check',
        // buttonClick: this.RecordTypeSelectButtonClick,
      },
    });

    return ref.afterClosed();
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

export enum SpanEvents {
  SPAN = 25,
  STABILIZATION = 26,
  SEABED = 41,
  BERM = 5,

  STRAKE = 1,  // SVY_HDR_EVT_ID=ADD FEATURE(1) WHERE SVY_TEXT_B = Strake
}



//export enum 



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