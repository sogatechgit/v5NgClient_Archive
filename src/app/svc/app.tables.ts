/***********************************************************************
* Automatically generated on 4/29/2021 3:34:42 PM
***********************************************************************/

import { AppCommonMethodsService } from '../api/svc/app-common-methods.service';
import { HttpClient } from '@angular/common/http';
import { TableBase } from '../api/svc/app-common.datatable';
import { TableRowBase }from '../api/svc/app-common.datarow';
import { ColumnInfo } from '../api/mod/app-column.model';






export class TblAnomaliesAction extends TableBase {

  public rows:Array<TblAnomaliesActionRow> = [];

  public tableFieldPrefix="AI_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "",
  "keyField": "AI_ID",
  "subTable": {},
  "dataGroup": "AI_AN_ID",
  "deletedFlagField": "AI_DELETED",
  "deletedDateStamp": "AI_DELETED_DATE",
  "deletedByStamp": "AI_DELETED_BY",
  "createdDateStamp": "AI_RAISED_DATE",
  "createdByStamp": "AI_RAISED_BY",
  "updatedDateStamp": "AI_UPDATED_DATE",
  "updatedByStamp": "AI_UPDATED_BY",
  "gridColumns": [
    "AI_REF_NO|cap=Ref.No.;center;wd=80",
    "AI_TITLE|cap=Title;mnw=200",
    "AI_ACT_PARTY1|cap=Action Party 1;wd=100",
    "AI_ACT_PARTY2|cap=Action Party 2;wd=100",
    "AI_TARGET_DATE|cap=Target Date;wd=80;center",
    "AI_ACT_START_DATE|cap=Start Date;wd=80;center",
    "AI_ACT_END_DATE|cap=End Date;wd=80;center",
    "AI_MHOURS|cap=Manhours;wd=70;center",
    "AI_STAT|cap=Status;wd=80",
    "AI_RAISED_BY|cap=Raised By;wd=100",
    "AI_RAISED_DATE|cap=Raised Date;wd=80;center",
    "AI_UPDATED_BY|cap=Updated By;wd=100",
    "AI_UPDATED_DATE|cap=Updated Date;wd=80;center",
    "AI_PRIORITY|cap=Priority;wd=80;center"
  ],
  "customGridColumns": [
    "AI_REF_NO|cap=Ref.No.;center;wd=80",
    "AI_TITLE|cap=Title;mnw=200"
  ],
  "defaultValues": {
    "AI_PRIORITY": 20111,
    "AI_STAT": 8900
  }
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="ai";

	this.columns.push(new ColumnInfo('AI_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_STAT', 'number', '', '', '@lookupgroup=152', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_PRIORITY', 'number', '', '', '@lookupgroup=251', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_ACT_PARTY1', 'string', '', '', '@lookuptable=users,usetext', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_ACT_PARTY2', 'string', '', '', '@lookuptable=users,usetext', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_REF_NO', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_TARGET_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_ACT_START_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_ACT_END_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_MHOURS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_NO', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_AN_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_DETAILS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_NOTES', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_UPDATED_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_RAISED_BY_NUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_RAISED_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_RAISED_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_UPDATED_BY_NUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_UPDATED_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_DELETED', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_DELETED_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_DELETED_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AI_TITLE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblAnomaliesActionRow):TblAnomaliesActionRow
  {
    return super.Add(row);
  }

  NewRow():TblAnomaliesActionRow{return new TblAnomaliesActionRow();}
  GetRows():Array<TblAnomaliesActionRow>{return this.rows;}
  public set currentRow(value:TblAnomaliesActionRow){super.__currentRow(value);}
  public get currentRow():TblAnomaliesActionRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblAnomaliesActionRow>{return super.__dirtyRows();}
  public get newRows():Array<TblAnomaliesActionRow>{return super.__newRows();}


}

export class TblAnomaliesActionRow extends TableRowBase{
	constructor(
		public AI_ID?:number, 
		public AI_STAT?:number, 
		public AI_PRIORITY?:number, 
		public AI_ACT_PARTY1?:string, 
		public AI_ACT_PARTY2?:string, 
		public AI_REF_NO?:string, 
		public AI_TARGET_DATE?:Date, 
		public AI_ACT_START_DATE?:Date, 
		public AI_ACT_END_DATE?:Date, 
		public AI_MHOURS?:number, 
		public AI_NO?:number, 
		public AI_AN_ID?:number, 
		public AI_DETAILS?:string, 
		public AI_NOTES?:string, 
		public AI_UPDATED_DATE?:Date, 
		public AI_RAISED_BY_NUM?:number, 
		public AI_RAISED_BY?:string, 
		public AI_RAISED_DATE?:Date, 
		public AI_UPDATED_BY_NUM?:number, 
		public AI_UPDATED_BY?:string, 
		public AI_DELETED?:number, 
		public AI_DELETED_BY?:string, 
		public AI_DELETED_DATE?:Date, 
		public AI_TITLE?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblAnomaliesAction{ return super._Table(); }


}




export class TblAnomalies extends TableBase {

  public rows:Array<TblAnomaliesRow> = [];

  public tableFieldPrefix="AN_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "",
  "keyField": "AN_ID",
  "subTable-y": "ans",
  "subTable": {
    "58": {
      "tableCode": "ans",
      "code": "",
      "name": "Operating Event",
      "group": 8570,
      "icon": "",
      "extraJoins": "",
      "extraFields": "",
      "fieldMapping": {}
    },
    "57": {
      "tableCode": "ans",
      "code": "",
      "name": "Overdue Corrective Maintenance",
      "group": 8569
    }
  },
  "refFilesLinkPathId-x": {
    "common": 16000
  },
  "assetField": "AN_ASSET_ID",
  "revisionField": "AN_REVNO",
  "referenceField": "AN_REF|YY-NNNN",
  "recordTypeField-x": "AN_TYPE",
  "dataGroup-x": "AN_TYPE",
  "deletedFlagField": "AN_DELETED",
  "deletedDateStamp": "AN_DELETED_DATE",
  "deletedByStamp": "AN_DELETED_BY",
  "createdDateStamp": "AN_RAISED_DATE",
  "createdByStamp": "AN_RAISED_BY",
  "updatedDateStamp": "AN_UPD_DATE",
  "updatedByStamp": "AN_UPD_BY",
  "assessedDateStamp": "AN_ASS_DATE",
  "assessedByStamp": "AN_ASS_BY",
  "lookupCode": "AN_REF",
  "lookupText": "AN_TITLE",
  "extraJoins": "`antype@antypeG,AN_TYPE`lkp@antgrp,ANTYPE_GROUP;",
  "extraFields": "antypeG.ANTYPE_GROUP@^ANT_GRP`antgrp.LKP_DESC_B@ANT_GRP",
  "extra": {
    "gridColumns": {
      "joins": "`antype@antypeG,AN_TYPE`lkp@antgrp,ANTYPE_GROUP;",
      "fields": "antypeG.ANTYPE_GROUP@^ANT_GRP`antgrp.LKP_DESC_B@ANT_GRP"
    }
  },
  "treeRecolorOnUpdate": "AN_ASSET_ID,AN_CURR_CLASS",
  "gridColumns-test": [
    "AN_REF|cap=Ref.No.;center;wd=60",
    "AN_REVNO|cap=Revision;wd=50;center",
    "AN_TITLE|cap=Title;mnw=150",
    "AN_RISK_RANK_SEVERITY|cap=Severity;map=S;wd=40;center;code",
    "AN_RISK_RANK_LIKELIHOOD|cap=Likelihood;map=L;wd=40;center;code"
  ],
  "gridColumns": [
    "AN_REF|cap=Ref.No.;center;wd=60",
    "AN_REVNO|cap=Revision;wd=50;center",
    "AN_TITLE|cap=Title;mnw=150",
    "AN_DESC|cap=Description;mnw=250",
    "AN_MAINT_REQ|cap=Ma.Req;wd=80",
    "AN_ACT_PARTY|cap=Action Party;wd=120",
    "AN_ASSET_ID|cap=Asset;mnw=150",
    "AN_STATUS|cap=Status;wd=70;center",
    "AN_WO_REF|cap=SAP#;wd=80",
    "AN_WO_STATUS|cap=SAP Status;wd=90",
    "AN_ASIS|cap=OTR;wd=30;center",
    "AN_ASSMNT|cap=Assessment;mnw=250",
    "AN_ASS_BY|cap=Assessed By;wd=120",
    "AN_ASS_DATE|cap=Assessed Date;wd=87",
    "AN_DATE_IDENT|cap=Date Identified;wd=87",
    "AN_RAISED_BY|cap=Raised By;wd=120",
    "AN_RAISED_DATE|cap=Raised;wd=87",
    "AN_UPD_BY|cap=Raised By;wd=120",
    "AN_UPD_DATE|cap=Updated Date;wd=87",
    "AN_RECCMD|cap=Recommendation;mnw=250",
    "AN_TA_APPROVED|cap=TA Approved;wd=30;center",
    "AN_TA_NAME|cap=Raised By;wd=120",
    "AN_TA_APPR_DATE|cap=TA Approve Date;wd=87",
    "AN_ACT_BY_DATE|cap=Action By Date;wd=87",
    "AN_ORIG_CLASS|cap=Orig.Class;wd=70;center;color",
    "AN_CURR_CLASS|cap=Curr.Class;wd=70;center;color",
    "AN_ORIG_AVAIL_CLASS|cap=Orig.Avail.Class;wd=70;center;color",
    "AN_CURR_AVAIL_CLASS|cap=Curr.Avail.Class;wd=70;center;color",
    "AN_TYPE|cap=Type;wd=100",
    "ANTYPE_GROUP|cap=Type Group;wd=100;disp=ANT_GRP;nofilt",
    "AN_RISK_RANK_SEVERITY|cap=Severity;map=S;wd=40;center;code",
    "AN_RISK_RANK_LIKELIHOOD|cap=Likelihood;map=L;wd=40;center;code"
  ],
  "gridRelatedAnomalies": [
    "AN_REF|cap=Ref.No.;center;wd=60",
    "AN_TITLE|cap=Title;mnw=150;mxw=250",
    "AN_ASSET_ID|cap=Asset;mnw=250",
    "AN_RAISED_DATE|cap=Raised;wd=87",
    "AN_STATUS|cap=Status;wd=70;center",
    "AN_CURR_CLASS|cap=Class;wd=70;center;color"
  ],
  "defaultValues": {
    "AN_TYPE": 58,
    "ANTYPE_GROUP": 8570,
    "AN_ORIG_CLASS": 8471,
    "AN_CURR_CLASS": 8471,
    "AN_ORIG_AVAIL_CLASS": 8471,
    "AN_CURR_AVAIL_CLASS": 8471,
    "AN_LIFE_TERM": 8500,
    "AN_MAINT_REQ": 8491,
    "AN_STATUS": 8450,
    "AN_PT_SUPPORT": 0,
    "AN_ASIS": 0,
    "AN_ATTACHMENTS": 0,
    "AN_PORTFOLIO_APPL": 0,
    "AN_FNCR_REQUIRED": 0
  }
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="an";

	this.columns.push(new ColumnInfo('AN_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASSET_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TITLE', 'string', '', '', '@maxlen=100;@minlen=5', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DATE_IDENT', 'Date', '', '', 'required', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DESC', 'string', '', '', 'required', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ORIG_CLASS', 'number', '', '', '@lookupgroup=144;@map=OC', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_CURR_CLASS', 'number', '', '', '@lookupgroup=144;@map=CC', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ORIG_AVAIL_CLASS', 'number', '', '', '@lookupgroup=144;@map=OAC', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_CURR_AVAIL_CLASS', 'number', '', '', '@lookupgroup=144;@map=CAC', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_STATUS', 'number', '', '', '@lookupgroup=143', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_LIFE_TERM', 'number', '', '', '@lookupgroup=146', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_WO_STATUS', 'number', '', '', '@lookupgroup=190', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_MAINT_REQ', 'number', '', '', '@lookupgroup=145', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASS_DATE', 'Date', '', '', 'datestamp|AN_ASSMNT', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASS_BY', 'string', '', '', 'userstamp|AN_ASSMNT', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_UPD_DATE', 'Date', '', '', 'datestamp|AN_ORIG_AVAIL_CLASS,AN_CURR_AVAIL_CLASS', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_UPD_BY', 'string', '', '', 'userstamp|AN_ORIG_AVAIL_CLASS,AN_CURR_AVAIL_CLASS', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TYPE', 'number', '', '', '@lookuptable=antype', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_SEVERITY', 'number', '', '', '@lookupgroup=148;@map=S', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_LIKELIHOOD', 'number', '', '', '@lookupgroup=147;@map=L', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASIS', 'number', '', '', '@lookupswitch=YN-', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_APPROVED', 'number', '', '', '@lookupswitch=YN-', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_PT_SUPPORT', 'number', '', '', '@lookupswitch=YN-', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_PORTFOLIO_APPL', 'number', '', '', '@lookupswitch=YN-', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_EQ_FAILURE', 'number', '', '', '@lookupswitch=YN-', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_FNCR_REQUIRED', 'number', '', '', '@lookupswitch=YN-', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_REF', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RAISED_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RAISED_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_REVNO', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_BY_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_PARTY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_WO_REF', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_REQ', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_APPR_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_UPD_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_UPD_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_FNCR', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_START_EAST', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_END_EAST', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_START_NORTH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_END_NORTH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_NOTIFICATION_REF', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RECCMD', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_NOTIFICATION_STATUS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASSMNT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DELETED', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DELETED_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DELETED_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_COMMENTS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ATTACHMENTS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_COMMENTS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_ANOM_REF', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_MOBIL', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_PROD_RSTO', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TYPE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_DIAGNOSTIC', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_TYPE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_CATEGORY', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_PLAN_PROC', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_MOBIL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_ACTUAL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_DEMOB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_WEATHER', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_ROV', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_VESSEL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_VEND_EQPT', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_OTHER', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_AFE_COST', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_ACTUAL_COST', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_ACTUAL_COST', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_WBS_NUMBER', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_UPDATED', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_UPDATED_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_SUMMARY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_PARENT_ANOM_REV', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_LEARNING', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_AFE_SHELL_SHARE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_DAY_RATE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_WELL_DOWNTIME', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASIS_STATUS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblAnomaliesRow):TblAnomaliesRow
  {
    return super.Add(row);
  }

  NewRow():TblAnomaliesRow{return new TblAnomaliesRow();}
  GetRows():Array<TblAnomaliesRow>{return this.rows;}
  public set currentRow(value:TblAnomaliesRow){super.__currentRow(value);}
  public get currentRow():TblAnomaliesRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblAnomaliesRow>{return super.__dirtyRows();}
  public get newRows():Array<TblAnomaliesRow>{return super.__newRows();}


}

export class TblAnomaliesRow extends TableRowBase{
	constructor(
		public AN_ID?:number, 
		public AN_ASSET_ID?:number, 
		public AN_TITLE?:string, 
		public AN_DATE_IDENT?:Date, 
		public AN_DESC?:string, 
		public AN_ORIG_CLASS?:number, 
		public AN_CURR_CLASS?:number, 
		public AN_ORIG_AVAIL_CLASS?:number, 
		public AN_CURR_AVAIL_CLASS?:number, 
		public AN_STATUS?:number, 
		public AN_LIFE_TERM?:number, 
		public AN_WO_STATUS?:number, 
		public AN_MAINT_REQ?:number, 
		public AN_ASS_DATE?:Date, 
		public AN_ASS_BY?:string, 
		public AN_AVAIL_UPD_DATE?:Date, 
		public AN_AVAIL_UPD_BY?:string, 
		public AN_TYPE?:number, 
		public AN_RISK_RANK_SEVERITY?:number, 
		public AN_RISK_RANK_LIKELIHOOD?:number, 
		public AN_ASIS?:number, 
		public AN_TA_APPROVED?:number, 
		public AN_PT_SUPPORT?:number, 
		public AN_PORTFOLIO_APPL?:number, 
		public AN_EQ_FAILURE?:number, 
		public AN_FNCR_REQUIRED?:number, 
		public AN_REF?:string, 
		public AN_RAISED_BY?:string, 
		public AN_RAISED_DATE?:Date, 
		public AN_REVNO?:number, 
		public AN_ACT_BY_DATE?:Date, 
		public AN_ACT_PARTY?:string, 
		public AN_WO_REF?:string, 
		public AN_ACT_REQ?:number, 
		public AN_TA_NAME?:string, 
		public AN_TA_APPR_DATE?:Date, 
		public AN_UPD_DATE?:Date, 
		public AN_UPD_BY?:string, 
		public AN_FNCR?:string, 
		public AN_START_EAST?:number, 
		public AN_END_EAST?:number, 
		public AN_START_NORTH?:number, 
		public AN_END_NORTH?:number, 
		public AN_NOTIFICATION_REF?:string, 
		public AN_RECCMD?:string, 
		public AN_NOTIFICATION_STATUS?:string, 
		public AN_ASSMNT?:string, 
		public AN_DELETED?:number, 
		public AN_DELETED_BY?:string, 
		public AN_DELETED_DATE?:Date, 
		public AN_AVAIL_COMMENTS?:string, 
		public AN_ATTACHMENTS?:number, 
		public AN_RISK_RANK_COMMENTS?:string, 
		public ITV_ANOM_REF?:string, 
		public ITV_DATE_MOBIL?:Date, 
		public ITV_DATE_PROD_RSTO?:Date, 
		public ITV_TYPE?:number, 
		public ITV_TIME_DIAGNOSTIC?:number, 
		public ITV_VESSEL_TYPE?:number, 
		public ITV_CATEGORY?:number, 
		public ITV_TIME_PLAN_PROC?:number, 
		public ITV_TIME_MOBIL?:number, 
		public ITV_TIME_ACTUAL?:number, 
		public ITV_TIME_DEMOB?:number, 
		public ITV_TTIME_WEATHER?:number, 
		public ITV_TTIME_ROV?:number, 
		public ITV_TTIME_VESSEL?:number, 
		public ITV_TTIME_VEND_EQPT?:number, 
		public ITV_TTIME_OTHER?:number, 
		public ITV_AFE_COST?:number, 
		public ITV_ACTUAL_COST?:number, 
		public ITV_DATE_ACTUAL_COST?:Date, 
		public ITV_WBS_NUMBER?:string, 
		public ITV_UPDATED?:Date, 
		public ITV_UPDATED_BY?:string, 
		public ITV_SUMMARY?:string, 
		public ITV_VESSEL_NAME?:string, 
		public ITV_PARENT_ANOM_REV?:string, 
		public ITV_LEARNING?:string, 
		public ITV_AFE_SHELL_SHARE?:number, 
		public ITV_VESSEL_DAY_RATE?:number, 
		public ITV_WELL_DOWNTIME?:number, 
		public AN_ASIS_STATUS?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblAnomalies{ return super._Table(); }


}




export class TblAnomaliesArchive extends TableBase {

  public rows:Array<TblAnomaliesArchiveRow> = [];

  public tableFieldPrefix="ANA_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="ana";

	this.columns.push(new ColumnInfo('ANA_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANA_ARCHIVE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANA_ARCHIVE_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANA_ARCHIVE_REASON', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_REF', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_REVNO', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASSET_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TYPE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_STATUS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RAISED_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RAISED_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ORIG_CLASS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_CURR_CLASS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASS_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASS_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_BY_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_PARTY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_MAINT_REQ', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_WO_REF', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_WO_STATUS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DATE_IDENT', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_REQ', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_EQ_FAILURE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_APPROVED', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_APPR_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ORIG_AVAIL_CLASS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_CURR_AVAIL_CLASS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_UPD_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_UPD_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_UPD_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_UPD_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_FNCR_REQUIRED', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_FNCR', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_LIFE_TERM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_PORTFOLIO_APPL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_SEVERITY', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_LIKELIHOOD', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_START_EAST', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_END_EAST', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DESC', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_START_NORTH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_END_NORTH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_NOTIFICATION_REF', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RECCMD', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_NOTIFICATION_STATUS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASSMNT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DELETED', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DELETED_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DELETED_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_COMMENTS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TITLE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ATTACHMENTS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_COMMENTS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_ANOM_REF', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_MOBIL', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_PROD_RSTO', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TYPE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_DIAGNOSTIC', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_TYPE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_CATEGORY', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_PLAN_PROC', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_MOBIL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_ACTUAL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_DEMOB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_WEATHER', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_ROV', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_VESSEL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_VEND_EQPT', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_OTHER', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_AFE_COST', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_ACTUAL_COST', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_ACTUAL_COST', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_WBS_NUMBER', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_UPDATED', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_UPDATED_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_SUMMARY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_PARENT_ANOM_REV', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_LEARNING', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_AFE_SHELL_SHARE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_DAY_RATE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_WELL_DOWNTIME', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASIS_STATUS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_PT_SUPPORT', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASIS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblAnomaliesArchiveRow):TblAnomaliesArchiveRow
  {
    return super.Add(row);
  }

  NewRow():TblAnomaliesArchiveRow{return new TblAnomaliesArchiveRow();}
  GetRows():Array<TblAnomaliesArchiveRow>{return this.rows;}
  public set currentRow(value:TblAnomaliesArchiveRow){super.__currentRow(value);}
  public get currentRow():TblAnomaliesArchiveRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblAnomaliesArchiveRow>{return super.__dirtyRows();}
  public get newRows():Array<TblAnomaliesArchiveRow>{return super.__newRows();}


}

export class TblAnomaliesArchiveRow extends TableRowBase{
	constructor(
		public ANA_ID?:number, 
		public ANA_ARCHIVE_DATE?:Date, 
		public ANA_ARCHIVE_BY?:string, 
		public ANA_ARCHIVE_REASON?:string, 
		public AN_ID?:number, 
		public AN_REF?:string, 
		public AN_REVNO?:string, 
		public AN_ASSET_ID?:number, 
		public AN_TYPE?:number, 
		public AN_STATUS?:number, 
		public AN_RAISED_BY?:string, 
		public AN_RAISED_DATE?:Date, 
		public AN_ORIG_CLASS?:number, 
		public AN_CURR_CLASS?:number, 
		public AN_ASS_DATE?:Date, 
		public AN_ASS_BY?:string, 
		public AN_ACT_BY_DATE?:Date, 
		public AN_ACT_PARTY?:string, 
		public AN_MAINT_REQ?:number, 
		public AN_WO_REF?:string, 
		public AN_WO_STATUS?:string, 
		public AN_DATE_IDENT?:Date, 
		public AN_ACT_REQ?:number, 
		public AN_EQ_FAILURE?:number, 
		public AN_TA_APPROVED?:number, 
		public AN_TA_NAME?:string, 
		public AN_TA_APPR_DATE?:Date, 
		public AN_ORIG_AVAIL_CLASS?:number, 
		public AN_CURR_AVAIL_CLASS?:number, 
		public AN_AVAIL_UPD_DATE?:Date, 
		public AN_AVAIL_UPD_BY?:string, 
		public AN_UPD_DATE?:Date, 
		public AN_UPD_BY?:string, 
		public AN_FNCR_REQUIRED?:number, 
		public AN_FNCR?:string, 
		public AN_LIFE_TERM?:number, 
		public AN_PORTFOLIO_APPL?:number, 
		public AN_RISK_RANK_SEVERITY?:number, 
		public AN_RISK_RANK_LIKELIHOOD?:number, 
		public AN_START_EAST?:number, 
		public AN_END_EAST?:number, 
		public AN_DESC?:string, 
		public AN_START_NORTH?:number, 
		public AN_END_NORTH?:number, 
		public AN_NOTIFICATION_REF?:string, 
		public AN_RECCMD?:string, 
		public AN_NOTIFICATION_STATUS?:string, 
		public AN_ASSMNT?:string, 
		public AN_DELETED?:number, 
		public AN_DELETED_BY?:string, 
		public AN_DELETED_DATE?:Date, 
		public AN_AVAIL_COMMENTS?:string, 
		public AN_TITLE?:string, 
		public AN_ATTACHMENTS?:number, 
		public AN_RISK_RANK_COMMENTS?:string, 
		public ITV_ANOM_REF?:string, 
		public ITV_DATE_MOBIL?:Date, 
		public ITV_DATE_PROD_RSTO?:Date, 
		public ITV_TYPE?:number, 
		public ITV_TIME_DIAGNOSTIC?:number, 
		public ITV_VESSEL_TYPE?:number, 
		public ITV_CATEGORY?:number, 
		public ITV_TIME_PLAN_PROC?:number, 
		public ITV_TIME_MOBIL?:number, 
		public ITV_TIME_ACTUAL?:number, 
		public ITV_TIME_DEMOB?:number, 
		public ITV_TTIME_WEATHER?:number, 
		public ITV_TTIME_ROV?:number, 
		public ITV_TTIME_VESSEL?:number, 
		public ITV_TTIME_VEND_EQPT?:number, 
		public ITV_TTIME_OTHER?:number, 
		public ITV_AFE_COST?:number, 
		public ITV_ACTUAL_COST?:number, 
		public ITV_DATE_ACTUAL_COST?:Date, 
		public ITV_WBS_NUMBER?:string, 
		public ITV_UPDATED?:Date, 
		public ITV_UPDATED_BY?:string, 
		public ITV_SUMMARY?:string, 
		public ITV_VESSEL_NAME?:string, 
		public ITV_PARENT_ANOM_REV?:string, 
		public ITV_LEARNING?:string, 
		public ITV_AFE_SHELL_SHARE?:number, 
		public ITV_VESSEL_DAY_RATE?:number, 
		public ITV_WELL_DOWNTIME?:number, 
		public AN_ASIS_STATUS?:number, 
		public AN_PT_SUPPORT?:number, 
		public AN_ASIS?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblAnomaliesArchive{ return super._Table(); }


}




export class TblAnomaliesSub extends TableBase {

  public rows:Array<TblAnomaliesSubRow> = [];

  public tableFieldPrefix="ANS_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "ANS_AN_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="ans";

	this.columns.push(new ColumnInfo('ANS_AN_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANS_FIELD_1', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANS_FIELD_2', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANS_FIELD_3', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblAnomaliesSubRow):TblAnomaliesSubRow
  {
    return super.Add(row);
  }

  NewRow():TblAnomaliesSubRow{return new TblAnomaliesSubRow();}
  GetRows():Array<TblAnomaliesSubRow>{return this.rows;}
  public set currentRow(value:TblAnomaliesSubRow){super.__currentRow(value);}
  public get currentRow():TblAnomaliesSubRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblAnomaliesSubRow>{return super.__dirtyRows();}
  public get newRows():Array<TblAnomaliesSubRow>{return super.__newRows();}


}

export class TblAnomaliesSubRow extends TableRowBase{
	constructor(
		public ANS_AN_ID?:number, 
		public ANS_FIELD_1?:string, 
		public ANS_FIELD_2?:string, 
		public ANS_FIELD_3?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblAnomaliesSub{ return super._Table(); }


}




export class TblAnomalyTypes extends TableBase {

  public rows:Array<TblAnomalyTypesRow> = [];

  public tableFieldPrefix="ANTYPE_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "lookup",
  "lookupCode": "ANTYPE_CODE",
  "lookupText": "ANTYPE_NAME",
  "lookupGroup": "ANTYPE_GROUP",
  "gridColumns": ""
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="antype";

	this.columns.push(new ColumnInfo('ANTYPE_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANTYPE_CODE', 'string', '', '', 'lkpcode', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANTYPE_NAME', 'string', '', '', 'lkptext', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANTYPE_GROUP', 'number', '', '', 'lkpgroup', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANTYPE_APPLIESTO', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANTYPE_CORR_REL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANTYPE_COMMENTS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANTYPE_LIMITS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANTYPE_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ANTYPE_LOOKUP', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblAnomalyTypesRow):TblAnomalyTypesRow
  {
    return super.Add(row);
  }

  NewRow():TblAnomalyTypesRow{return new TblAnomalyTypesRow();}
  GetRows():Array<TblAnomalyTypesRow>{return this.rows;}
  public set currentRow(value:TblAnomalyTypesRow){super.__currentRow(value);}
  public get currentRow():TblAnomalyTypesRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblAnomalyTypesRow>{return super.__dirtyRows();}
  public get newRows():Array<TblAnomalyTypesRow>{return super.__newRows();}


}

export class TblAnomalyTypesRow extends TableRowBase{
	constructor(
		public ANTYPE_ID?:number, 
		public ANTYPE_CODE?:string, 
		public ANTYPE_NAME?:string, 
		public ANTYPE_GROUP?:number, 
		public ANTYPE_APPLIESTO?:string, 
		public ANTYPE_CORR_REL?:number, 
		public ANTYPE_COMMENTS?:string, 
		public ANTYPE_LIMITS?:string, 
		public ANTYPE_UPDATE_DATE?:Date, 
		public ANTYPE_LOOKUP?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblAnomalyTypes{ return super._Table(); }


}




export class TblChangeTracker extends TableBase {

  public rows:Array<TblChangeTrackerRow> = [];

  public tableFieldPrefix="TRK_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chgTrack";

	this.columns.push(new ColumnInfo('TRK_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_USER_LOGIN', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_TABLE_CODE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_FIELD_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_ACTION', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_KEY_VALUE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_STAMP', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_REC_INFO', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChangeTrackerRow):TblChangeTrackerRow
  {
    return super.Add(row);
  }

  NewRow():TblChangeTrackerRow{return new TblChangeTrackerRow();}
  GetRows():Array<TblChangeTrackerRow>{return this.rows;}
  public set currentRow(value:TblChangeTrackerRow){super.__currentRow(value);}
  public get currentRow():TblChangeTrackerRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChangeTrackerRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChangeTrackerRow>{return super.__newRows();}


}

export class TblChangeTrackerRow extends TableRowBase{
	constructor(
		public TRK_ID?:number, 
		public TRK_USER_LOGIN?:string, 
		public TRK_TABLE_CODE?:string, 
		public TRK_FIELD_NAME?:string, 
		public TRK_ACTION?:string, 
		public TRK_KEY_VALUE?:string, 
		public TRK_STAMP?:string, 
		public TRK_REC_INFO?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChangeTracker{ return super._Table(); }


}




export class TblChemDBBAC extends TableBase {

  public rows:Array<TblChemDBBACRow> = [];

  public tableFieldPrefix="CHD_BAC_BAC_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_BAC_BAC_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmbac";

	this.columns.push(new ColumnInfo('CHD_BAC_BAC_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_BAC_BAC_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_BAC_BAC_REC_TYPE', 'number', '', '', '@lookupgroup=159', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_BAC_BAC_PSRB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_BAC_BAC_PGRB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_BAC_BAC_PNRB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_BAC_BAC_PNRSOB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_BAC_BAC_SSRB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_BAC_BAC_SGRB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_BAC_BAC_SNRB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_BAC_BAC_SNRSOB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBBACRow):TblChemDBBACRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBBACRow{return new TblChemDBBACRow();}
  GetRows():Array<TblChemDBBACRow>{return this.rows;}
  public set currentRow(value:TblChemDBBACRow){super.__currentRow(value);}
  public get currentRow():TblChemDBBACRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBBACRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBBACRow>{return super.__newRows();}


}

export class TblChemDBBACRow extends TableRowBase{
	constructor(
		public CHD_BAC_BAC_ID?:number, 
		public CHD_BAC_BAC_UPDATE_DATE?:Date, 
		public CHD_BAC_BAC_REC_TYPE?:number, 
		public CHD_BAC_BAC_PSRB?:number, 
		public CHD_BAC_BAC_PGRB?:number, 
		public CHD_BAC_BAC_PNRB?:number, 
		public CHD_BAC_BAC_PNRSOB?:number, 
		public CHD_BAC_BAC_SSRB?:number, 
		public CHD_BAC_BAC_SGRB?:number, 
		public CHD_BAC_BAC_SNRB?:number, 
		public CHD_BAC_BAC_SNRSOB?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBBAC{ return super._Table(); }


}




export class TblChemDBcorr extends TableBase {

  public rows:Array<TblChemDBcorrRow> = [];

  public tableFieldPrefix="CHD_COUP_CORR_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_COUP_CORR_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmcorr";

	this.columns.push(new ColumnInfo('CHD_COUP_CORR_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_CORR_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_CORR_DT_INST', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_CORR_DT_REM', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_CORR_DAYS_EXP', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_CORR_GEN_MPY', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_CORR_PITTING_MPY', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBcorrRow):TblChemDBcorrRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBcorrRow{return new TblChemDBcorrRow();}
  GetRows():Array<TblChemDBcorrRow>{return this.rows;}
  public set currentRow(value:TblChemDBcorrRow){super.__currentRow(value);}
  public get currentRow():TblChemDBcorrRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBcorrRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBcorrRow>{return super.__newRows();}


}

export class TblChemDBcorrRow extends TableRowBase{
	constructor(
		public CHD_COUP_CORR_ID?:number, 
		public CHD_COUP_CORR_UPDATE_DATE?:Date, 
		public CHD_COUP_CORR_DT_INST?:Date, 
		public CHD_COUP_CORR_DT_REM?:Date, 
		public CHD_COUP_CORR_DAYS_EXP?:number, 
		public CHD_COUP_CORR_GEN_MPY?:number, 
		public CHD_COUP_CORR_PITTING_MPY?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBcorr{ return super._Table(); }


}




export class TblChemDBGAP extends TableBase {

  public rows:Array<TblChemDBGAPRow> = [];

  public tableFieldPrefix="CHD_GAP_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_GAP_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmgap";

	this.columns.push(new ColumnInfo('CHD_GAP_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GAP_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GAP_CO2', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GAP_H2S', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBGAPRow):TblChemDBGAPRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBGAPRow{return new TblChemDBGAPRow();}
  GetRows():Array<TblChemDBGAPRow>{return this.rows;}
  public set currentRow(value:TblChemDBGAPRow){super.__currentRow(value);}
  public get currentRow():TblChemDBGAPRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBGAPRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBGAPRow>{return super.__newRows();}


}

export class TblChemDBGAPRow extends TableRowBase{
	constructor(
		public CHD_GAP_ID?:number, 
		public CHD_GAP_UPDATE_DATE?:Date, 
		public CHD_GAP_CO2?:number, 
		public CHD_GAP_H2S?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBGAP{ return super._Table(); }


}




export class TblChemDBglycol extends TableBase {

  public rows:Array<TblChemDBglycolRow> = [];

  public tableFieldPrefix="CHD_GLY_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_GLY_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmglycol";

	this.columns.push(new ColumnInfo('CHD_GLY_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_TSS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_THC', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_TDS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_PH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_FOAMING', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_FOAMING_TIME', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_H2O', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_IRON', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_CALCIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_POTASSIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_MAGNESIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_SODIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_SPGR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_CHLORIDE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_FLASH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_MEG', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_DEG', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_TEG', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_TTEG', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_OTHER', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_RESID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_GLY_APP', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBglycolRow):TblChemDBglycolRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBglycolRow{return new TblChemDBglycolRow();}
  GetRows():Array<TblChemDBglycolRow>{return this.rows;}
  public set currentRow(value:TblChemDBglycolRow){super.__currentRow(value);}
  public get currentRow():TblChemDBglycolRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBglycolRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBglycolRow>{return super.__newRows();}


}

export class TblChemDBglycolRow extends TableRowBase{
	constructor(
		public CHD_GLY_ID?:number, 
		public CHD_GLY_UPDATE_DATE?:Date, 
		public CHD_GLY_TSS?:number, 
		public CHD_GLY_THC?:number, 
		public CHD_GLY_TDS?:number, 
		public CHD_GLY_PH?:number, 
		public CHD_GLY_FOAMING?:number, 
		public CHD_GLY_FOAMING_TIME?:number, 
		public CHD_GLY_H2O?:number, 
		public CHD_GLY_IRON?:number, 
		public CHD_GLY_CALCIUM?:number, 
		public CHD_GLY_POTASSIUM?:number, 
		public CHD_GLY_MAGNESIUM?:number, 
		public CHD_GLY_SODIUM?:number, 
		public CHD_GLY_SPGR?:number, 
		public CHD_GLY_CHLORIDE?:number, 
		public CHD_GLY_FLASH?:number, 
		public CHD_GLY_MEG?:number, 
		public CHD_GLY_DEG?:number, 
		public CHD_GLY_TEG?:number, 
		public CHD_GLY_TTEG?:number, 
		public CHD_GLY_OTHER?:number, 
		public CHD_GLY_RESID?:number, 
		public CHD_GLY_APP?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBglycol{ return super._Table(); }


}




export class TblChemDBHeader extends TableBase {

  public rows:Array<TblChemDBHeaderRow> = [];

  public tableFieldPrefix="CHD_HDR_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "",
  "keyField": "CHD_HDR_ID",
  "subTable": {
    "1": {
      "tableCode": "chmgap",
      "code": "chmgap",
      "name": "Hydrocarbon Composition",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "2": {
      "tableCode": "chmowa",
      "code": "chmowa",
      "name": "Organic (Oil & Wax) Analysis",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "3": {
      "tableCode": "chmbac",
      "code": "chmbac",
      "name": "Bacteria Analysis (Bacteria)",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "4": {
      "tableCode": "chmpwa",
      "code": "chmpwa",
      "name": "Produced Water Analysis",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "5": {
      "tableCode": "",
      "code": "",
      "name": "Solid Analysis",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "6": {
      "tableCode": "",
      "code": "",
      "name": "Failure Analysis",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "7": {
      "tableCode": "",
      "code": "",
      "name": "Bacteria Analysis (Biocide Testing)",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "8": {
      "tableCode": "chmcorr",
      "code": "chmcorr",
      "name": "Corrosion Coupon",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "9": {
      "tableCode": "chmscale",
      "code": "chmscale",
      "name": "Scale Coupon",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "10": {
      "tableCode": "",
      "code": "",
      "name": "BSW Readings",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "11": {
      "tableCode": "chmwqa",
      "code": "chmwqa",
      "name": "Water Quality (Oil & Grease) Analysis",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "12": {
      "tableCode": "chmglycol",
      "code": "chmglycol",
      "name": "Glycol Analysis",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "13": {
      "tableCode": "chmwhru",
      "code": "chmwhru",
      "name": "WHRU and Jacket Water (WHRU)",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "14": {
      "tableCode": "chmwhrujack",
      "code": "chmwhrujack",
      "name": "WHRU and Jacket Water (Jacket)",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "15": {
      "tableCode": "chmwhruwater",
      "code": "chmwhruwater",
      "name": "WHRU Water Analysis",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "16": {
      "tableCode": "chmtreat",
      "code": "chmtreat",
      "name": "Chemical Treatment Rates",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "17": {
      "tableCode": "chmqual",
      "code": "",
      "name": "Chemical Documents",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": "",
      "fieldMapping": {}
    },
    "18": {
      "tableCode": "",
      "code": "",
      "name": "Field Service",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "19": {
      "tableCode": "chmhfa",
      "code": "chmhfa",
      "name": "Hydraulic Fluid Analysis",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    },
    "20": {
      "tableCode": "chmrsd",
      "code": "chmrsd",
      "name": "Chemical Residuals",
      "icon": "fa fa-folder",
      "extraJoins": "",
      "extraFields": ""
    }
  },
  "assetField": "CHD_HDR_ASSET_ID",
  "revisionField": "",
  "referenceField": "",
  "recordTypeField": "",
  "deletedFlagField": "CHD_HDR_DELETED",
  "deletedDateStamp": "",
  "deletedByStamp": "",
  "createdDateStamp": "",
  "createdByStamp": "",
  "updatedDateStamp": "CHD_HDR_UPDATE_DATE",
  "updatedByStamp": "",
  "assessedDateStamp": "",
  "assessedByStamp": "",
  "lookupCode": "",
  "lookupText": "",
  "dataGroup": "CHD_HDR_TYPE",
  "extraFields": "",
  "extraJoins": "",
  "treeRecolorOnUpdate": "",
  "gridColumns": [
    "CHD_HDR_ASSET_ID|cap=Sampling Location;mnw=200",
    "CHD_HDR_SAMP_DATE|cap=Sampling Date;wd=150",
    "CHD_HDR_COMMENTS|cap=Comments;mnw=200",
    "CHD_HDR_STATUS|cap=Status;wd=70;center;color"
  ],
  "defaultValues": {
    "CHD_HDR_TYPE": 18
  }
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmhdr";

	this.columns.push(new ColumnInfo('CHD_HDR_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_DELETED', 'number', '', '', 'deleted', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_ASSET_ID', 'number', 'Sampling Location', '', 'asset,@display|NODE_DESC,@nodeloc|TRE_NOD_LOC', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_STATUS', 'number', '', '', '@lookupgroup=157', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_ANA_VEND', 'number', '', '', '@lookupgroup=158', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_INT', 'number', '', '', '@lookupgroup=133', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_TYPE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_SAMP_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_DBL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_TXT1', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_TXT2', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_COMMENTS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_LAST_UPDATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_LAST_UPDATE_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_CLASS_OVERRIDE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_CLASS_OVERRIDE_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HDR_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBHeaderRow):TblChemDBHeaderRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBHeaderRow{return new TblChemDBHeaderRow();}
  GetRows():Array<TblChemDBHeaderRow>{return this.rows;}
  public set currentRow(value:TblChemDBHeaderRow){super.__currentRow(value);}
  public get currentRow():TblChemDBHeaderRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBHeaderRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBHeaderRow>{return super.__newRows();}


}

export class TblChemDBHeaderRow extends TableRowBase{
	constructor(
		public CHD_HDR_ID?:number, 
		public CHD_HDR_DELETED?:number, 
		public CHD_HDR_ASSET_ID?:number, 
		public CHD_HDR_STATUS?:number, 
		public CHD_HDR_ANA_VEND?:number, 
		public CHD_HDR_INT?:number, 
		public CHD_HDR_TYPE?:number, 
		public CHD_HDR_SAMP_DATE?:Date, 
		public CHD_HDR_DBL?:number, 
		public CHD_HDR_TXT1?:string, 
		public CHD_HDR_TXT2?:string, 
		public CHD_HDR_COMMENTS?:string, 
		public CHD_HDR_LAST_UPDATE?:Date, 
		public CHD_HDR_LAST_UPDATE_BY?:string, 
		public CHD_HDR_CLASS_OVERRIDE_DATE?:Date, 
		public CHD_HDR_CLASS_OVERRIDE_BY?:string, 
		public CHD_HDR_UPDATE_DATE?:Date){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBHeader{ return super._Table(); }


}




export class TblChemDBHFA extends TableBase {

  public rows:Array<TblChemDBHFARow> = [];

  public tableFieldPrefix="CHD_HFA_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_HFA_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmhfa";

	this.columns.push(new ColumnInfo('CHD_HFA_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_UPDATE_BY', 'string', '', '', 'updatedby', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_DTAKEN', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_DREC', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_DTESTED', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_DISSUED', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_REP_TO', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_EMAIL_FAX', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_FNAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_SOURCE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_INSTSITE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_CHK_FILT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_ELIM_SRC', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_SUB_ADD_SAMP', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_COLOR', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_GLYCOL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_LIQ_COR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_PH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_COND', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_WATER_H', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_SPGR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_BAC_CNT', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_FUNGI_CNT', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_COLOR_R', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_GLYCOL_R', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_LIQ_COR_R', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_PH_R', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_COND_R', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_WATER_H_R', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_SPGR_R', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_BAC_CNT_R', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_FUNGI_CNT_R', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_SIL', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_ELAS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_FIBERS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_PREC', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_GEL', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_NAS_CL', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_OIL', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_YELL_MET', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_BLK_MET', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_BRT_MET', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_GREASE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_RUST', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_OLIG', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_SILICA', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_OTHERS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_OTHERS_R', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_HFA_PASS_FAIL', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBHFARow):TblChemDBHFARow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBHFARow{return new TblChemDBHFARow();}
  GetRows():Array<TblChemDBHFARow>{return this.rows;}
  public set currentRow(value:TblChemDBHFARow){super.__currentRow(value);}
  public get currentRow():TblChemDBHFARow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBHFARow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBHFARow>{return super.__newRows();}


}

export class TblChemDBHFARow extends TableRowBase{
	constructor(
		public CHD_HFA_ID?:number, 
		public CHD_HFA_UPDATE_DATE?:Date, 
		public CHD_HFA_UPDATE_BY?:string, 
		public CHD_HFA_DTAKEN?:Date, 
		public CHD_HFA_DREC?:Date, 
		public CHD_HFA_DTESTED?:Date, 
		public CHD_HFA_DISSUED?:Date, 
		public CHD_HFA_REP_TO?:string, 
		public CHD_HFA_EMAIL_FAX?:string, 
		public CHD_HFA_FNAME?:string, 
		public CHD_HFA_SOURCE?:string, 
		public CHD_HFA_INSTSITE?:string, 
		public CHD_HFA_CHK_FILT?:string, 
		public CHD_HFA_ELIM_SRC?:string, 
		public CHD_HFA_SUB_ADD_SAMP?:string, 
		public CHD_HFA_COLOR?:string, 
		public CHD_HFA_GLYCOL?:number, 
		public CHD_HFA_LIQ_COR?:number, 
		public CHD_HFA_PH?:number, 
		public CHD_HFA_COND?:number, 
		public CHD_HFA_WATER_H?:number, 
		public CHD_HFA_SPGR?:number, 
		public CHD_HFA_BAC_CNT?:number, 
		public CHD_HFA_FUNGI_CNT?:number, 
		public CHD_HFA_COLOR_R?:string, 
		public CHD_HFA_GLYCOL_R?:string, 
		public CHD_HFA_LIQ_COR_R?:string, 
		public CHD_HFA_PH_R?:string, 
		public CHD_HFA_COND_R?:string, 
		public CHD_HFA_WATER_H_R?:string, 
		public CHD_HFA_SPGR_R?:string, 
		public CHD_HFA_BAC_CNT_R?:string, 
		public CHD_HFA_FUNGI_CNT_R?:string, 
		public CHD_HFA_SIL?:string, 
		public CHD_HFA_ELAS?:string, 
		public CHD_HFA_FIBERS?:string, 
		public CHD_HFA_PREC?:string, 
		public CHD_HFA_GEL?:string, 
		public CHD_HFA_NAS_CL?:string, 
		public CHD_HFA_OIL?:string, 
		public CHD_HFA_YELL_MET?:string, 
		public CHD_HFA_BLK_MET?:string, 
		public CHD_HFA_BRT_MET?:string, 
		public CHD_HFA_GREASE?:string, 
		public CHD_HFA_RUST?:string, 
		public CHD_HFA_OLIG?:string, 
		public CHD_HFA_SILICA?:string, 
		public CHD_HFA_OTHERS?:string, 
		public CHD_HFA_OTHERS_R?:string, 
		public CHD_HFA_PASS_FAIL?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBHFA{ return super._Table(); }


}




export class TblChemDBowa extends TableBase {

  public rows:Array<TblChemDBowaRow> = [];

  public tableFieldPrefix="CHD_OWA_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_OWA_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmowa";

	this.columns.push(new ColumnInfo('CHD_OWA_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_OWA_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_OWA_GRAVITY', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_OWA_INHIBITOR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_OWA_CLOUD_PT', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_OWA_POUR_PT', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_OWA_PARAFFIN', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_OWA_ASPHALTENE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBowaRow):TblChemDBowaRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBowaRow{return new TblChemDBowaRow();}
  GetRows():Array<TblChemDBowaRow>{return this.rows;}
  public set currentRow(value:TblChemDBowaRow){super.__currentRow(value);}
  public get currentRow():TblChemDBowaRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBowaRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBowaRow>{return super.__newRows();}


}

export class TblChemDBowaRow extends TableRowBase{
	constructor(
		public CHD_OWA_ID?:number, 
		public CHD_OWA_UPDATE_DATE?:Date, 
		public CHD_OWA_GRAVITY?:number, 
		public CHD_OWA_INHIBITOR?:number, 
		public CHD_OWA_CLOUD_PT?:number, 
		public CHD_OWA_POUR_PT?:number, 
		public CHD_OWA_PARAFFIN?:number, 
		public CHD_OWA_ASPHALTENE?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBowa{ return super._Table(); }


}




export class TblChemDBpwa extends TableBase {

  public rows:Array<TblChemDBpwaRow> = [];

  public tableFieldPrefix="CHD_PWA_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_PWA_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmpwa";

	this.columns.push(new ColumnInfo('CHD_PWA_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_SPGR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_TEMP', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_HARDNESS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_TDS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_ACR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_TSS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_FE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_SULFATE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_PH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_O2', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_H2S', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_SODIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_CALCIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_MAGNESIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_BARIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_BROMIDE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_POTASSIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_MANGANESE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_IRONSOLID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_IRONDISS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_ZINC', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_CHLORIDE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_CARBONATE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_BICARB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_SCALETEN', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_RESQTY', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_CONQTY', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_TA', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_TOTL_ALKALI', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_CO2', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_PWA_TA_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBpwaRow):TblChemDBpwaRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBpwaRow{return new TblChemDBpwaRow();}
  GetRows():Array<TblChemDBpwaRow>{return this.rows;}
  public set currentRow(value:TblChemDBpwaRow){super.__currentRow(value);}
  public get currentRow():TblChemDBpwaRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBpwaRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBpwaRow>{return super.__newRows();}


}

export class TblChemDBpwaRow extends TableRowBase{
	constructor(
		public CHD_PWA_ID?:number, 
		public CHD_PWA_UPDATE_DATE?:Date, 
		public CHD_PWA_SPGR?:number, 
		public CHD_PWA_TEMP?:number, 
		public CHD_PWA_HARDNESS?:number, 
		public CHD_PWA_TDS?:number, 
		public CHD_PWA_ACR?:number, 
		public CHD_PWA_TSS?:number, 
		public CHD_PWA_FE?:number, 
		public CHD_PWA_SULFATE?:number, 
		public CHD_PWA_PH?:number, 
		public CHD_PWA_O2?:number, 
		public CHD_PWA_H2S?:number, 
		public CHD_PWA_SODIUM?:number, 
		public CHD_PWA_CALCIUM?:number, 
		public CHD_PWA_MAGNESIUM?:number, 
		public CHD_PWA_BARIUM?:number, 
		public CHD_PWA_BROMIDE?:number, 
		public CHD_PWA_POTASSIUM?:number, 
		public CHD_PWA_MANGANESE?:number, 
		public CHD_PWA_IRONSOLID?:number, 
		public CHD_PWA_IRONDISS?:number, 
		public CHD_PWA_ZINC?:number, 
		public CHD_PWA_CHLORIDE?:number, 
		public CHD_PWA_CARBONATE?:number, 
		public CHD_PWA_BICARB?:number, 
		public CHD_PWA_SCALETEN?:number, 
		public CHD_PWA_RESQTY?:number, 
		public CHD_PWA_CONQTY?:number, 
		public CHD_PWA_TA?:number, 
		public CHD_PWA_TOTL_ALKALI?:number, 
		public CHD_PWA_CO2?:number, 
		public CHD_PWA_TA_NAME?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBpwa{ return super._Table(); }


}




export class TblChemDBQUAL extends TableBase {

  public rows:Array<TblChemDBQUALRow> = [];

  public tableFieldPrefix="CHD_CHEM_QUAL_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_CHEM_QUAL_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmqual";

	this.columns.push(new ColumnInfo('CHD_CHEM_QUAL_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_QUAL_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_QUAL_GNAME', 'number', '', '', '@lookupgroup=132', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_QUAL_PNAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_QUAL_CNAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_QUAL_REC_T', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBQUALRow):TblChemDBQUALRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBQUALRow{return new TblChemDBQUALRow();}
  GetRows():Array<TblChemDBQUALRow>{return this.rows;}
  public set currentRow(value:TblChemDBQUALRow){super.__currentRow(value);}
  public get currentRow():TblChemDBQUALRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBQUALRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBQUALRow>{return super.__newRows();}


}

export class TblChemDBQUALRow extends TableRowBase{
	constructor(
		public CHD_CHEM_QUAL_ID?:number, 
		public CHD_CHEM_QUAL_UPDATE_DATE?:Date, 
		public CHD_CHEM_QUAL_GNAME?:number, 
		public CHD_CHEM_QUAL_PNAME?:string, 
		public CHD_CHEM_QUAL_CNAME?:string, 
		public CHD_CHEM_QUAL_REC_T?:number, 
		public CHD_UPDATE_DATE?:Date){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBQUAL{ return super._Table(); }


}




export class TblChemDBrsd extends TableBase {

  public rows:Array<TblChemDBrsdRow> = [];

  public tableFieldPrefix="CHD_CHEM_RSD_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_CHEM_RSD_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmrsd";

	this.columns.push(new ColumnInfo('CHD_CHEM_RSD_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_RSD_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_RSD_GNAME', 'number', '', '', '@lookupgroup=132', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_RSD_PNAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_RSD_CNAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_RSD_IPOINT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_RSD_REC_T', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_RSD_ACT_RATE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBrsdRow):TblChemDBrsdRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBrsdRow{return new TblChemDBrsdRow();}
  GetRows():Array<TblChemDBrsdRow>{return this.rows;}
  public set currentRow(value:TblChemDBrsdRow){super.__currentRow(value);}
  public get currentRow():TblChemDBrsdRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBrsdRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBrsdRow>{return super.__newRows();}


}

export class TblChemDBrsdRow extends TableRowBase{
	constructor(
		public CHD_CHEM_RSD_ID?:number, 
		public CHD_CHEM_RSD_UPDATE_DATE?:Date, 
		public CHD_CHEM_RSD_GNAME?:number, 
		public CHD_CHEM_RSD_PNAME?:string, 
		public CHD_CHEM_RSD_CNAME?:string, 
		public CHD_CHEM_RSD_IPOINT?:string, 
		public CHD_CHEM_RSD_REC_T?:number, 
		public CHD_CHEM_RSD_ACT_RATE?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBrsd{ return super._Table(); }


}




export class TblChemDBscale extends TableBase {

  public rows:Array<TblChemDBscaleRow> = [];

  public tableFieldPrefix="CHD_COUP_SC";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_COUP_SC_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmscale";

	this.columns.push(new ColumnInfo('CHD_COUP_SC_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_SC_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_SC_DT_INST', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_SC_DT_REM', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_SC_DAYS_EXP', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_SC_WTGN', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_COUP_SC_WTGN_DY', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBscaleRow):TblChemDBscaleRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBscaleRow{return new TblChemDBscaleRow();}
  GetRows():Array<TblChemDBscaleRow>{return this.rows;}
  public set currentRow(value:TblChemDBscaleRow){super.__currentRow(value);}
  public get currentRow():TblChemDBscaleRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBscaleRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBscaleRow>{return super.__newRows();}


}

export class TblChemDBscaleRow extends TableRowBase{
	constructor(
		public CHD_COUP_SC_ID?:number, 
		public CHD_COUP_SC_UPDATE_DATE?:Date, 
		public CHD_COUP_SC_DT_INST?:Date, 
		public CHD_COUP_SC_DT_REM?:Date, 
		public CHD_COUP_SC_DAYS_EXP?:number, 
		public CHD_COUP_SC_WTGN?:number, 
		public CHD_COUP_SC_WTGN_DY?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBscale{ return super._Table(); }


}




export class TblChemDBSubModule extends TableBase {

  public rows:Array<TblChemDBSubModuleRow> = [];

  public tableFieldPrefix="CHD_MOD_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmsm";

	this.columns.push(new ColumnInfo('CHD_MOD_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_MOD_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_MOD_TBL_SOURCE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_MOD_TYPE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_MOD_GROUP_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_MOD_Q', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_MOD_ORDER', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_MOD_GATE_VALUES', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_MOD_FA_ICON', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBSubModuleRow):TblChemDBSubModuleRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBSubModuleRow{return new TblChemDBSubModuleRow();}
  GetRows():Array<TblChemDBSubModuleRow>{return this.rows;}
  public set currentRow(value:TblChemDBSubModuleRow){super.__currentRow(value);}
  public get currentRow():TblChemDBSubModuleRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBSubModuleRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBSubModuleRow>{return super.__newRows();}


}

export class TblChemDBSubModuleRow extends TableRowBase{
	constructor(
		public CHD_MOD_ID?:number, 
		public CHD_MOD_NAME?:string, 
		public CHD_MOD_TBL_SOURCE?:string, 
		public CHD_MOD_TYPE?:number, 
		public CHD_MOD_GROUP_ID?:number, 
		public CHD_MOD_Q?:string, 
		public CHD_MOD_ORDER?:number, 
		public CHD_MOD_GATE_VALUES?:number, 
		public CHD_MOD_FA_ICON?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBSubModule{ return super._Table(); }


}




export class TblChemDBtreat extends TableBase {

  public rows:Array<TblChemDBtreatRow> = [];

  public tableFieldPrefix="CHD_CHEM_TREAT_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_CHEM_TREAT_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmtreat";

	this.columns.push(new ColumnInfo('CHD_CHEM_TREAT_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_TREAT_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_TREAT_GNAME', 'number', '', '', '@lookupgroup=132', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_TREAT_PNAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_TREAT_CNAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_TREAT_IPOINT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_TREAT_REC_T', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_TREAT_ACT_RATE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_TREAT_REC_CON', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_CHEM_TREAT_REC_CON_BASIS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBtreatRow):TblChemDBtreatRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBtreatRow{return new TblChemDBtreatRow();}
  GetRows():Array<TblChemDBtreatRow>{return this.rows;}
  public set currentRow(value:TblChemDBtreatRow){super.__currentRow(value);}
  public get currentRow():TblChemDBtreatRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBtreatRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBtreatRow>{return super.__newRows();}


}

export class TblChemDBtreatRow extends TableRowBase{
	constructor(
		public CHD_CHEM_TREAT_ID?:number, 
		public CHD_CHEM_TREAT_UPDATE_DATE?:Date, 
		public CHD_CHEM_TREAT_GNAME?:number, 
		public CHD_CHEM_TREAT_PNAME?:string, 
		public CHD_CHEM_TREAT_CNAME?:string, 
		public CHD_CHEM_TREAT_IPOINT?:string, 
		public CHD_CHEM_TREAT_REC_T?:number, 
		public CHD_CHEM_TREAT_ACT_RATE?:number, 
		public CHD_UPDATE_DATE?:Date, 
		public CHD_CHEM_TREAT_REC_CON?:number, 
		public CHD_CHEM_TREAT_REC_CON_BASIS?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBtreat{ return super._Table(); }


}




export class TblChemDBwhru extends TableBase {

  public rows:Array<TblChemDBwhruRow> = [];

  public tableFieldPrefix="CHD_WHRU_WHRU_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_WHRU_WHRU_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmwhru";

	this.columns.push(new ColumnInfo('CHD_WHRU_WHRU_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WHRU_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WHRU_OI', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WHRU_PH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WHRU_NIT', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WHRU_COLOR', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBwhruRow):TblChemDBwhruRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBwhruRow{return new TblChemDBwhruRow();}
  GetRows():Array<TblChemDBwhruRow>{return this.rows;}
  public set currentRow(value:TblChemDBwhruRow){super.__currentRow(value);}
  public get currentRow():TblChemDBwhruRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBwhruRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBwhruRow>{return super.__newRows();}


}

export class TblChemDBwhruRow extends TableRowBase{
	constructor(
		public CHD_WHRU_WHRU_ID?:number, 
		public CHD_WHRU_WHRU_UPDATE_DATE?:Date, 
		public CHD_WHRU_WHRU_OI?:string, 
		public CHD_WHRU_WHRU_PH?:number, 
		public CHD_WHRU_WHRU_NIT?:number, 
		public CHD_WHRU_WHRU_COLOR?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBwhru{ return super._Table(); }


}




export class TblChemDBwhruwater extends TableBase {

  public rows:Array<TblChemDBwhruwaterRow> = [];

  public tableFieldPrefix="CHD_WHRU_WATER_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_WHRU_WATER_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmwhruwater";

	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_TDS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_TSS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_IRON', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_SPGR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_COND', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_HARDNESS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_SODIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_CALCIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_PH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_TEMP', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_MAGNESIUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_CHLORIDE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WHRU_WATER_SULFATE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBwhruwaterRow):TblChemDBwhruwaterRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBwhruwaterRow{return new TblChemDBwhruwaterRow();}
  GetRows():Array<TblChemDBwhruwaterRow>{return this.rows;}
  public set currentRow(value:TblChemDBwhruwaterRow){super.__currentRow(value);}
  public get currentRow():TblChemDBwhruwaterRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBwhruwaterRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBwhruwaterRow>{return super.__newRows();}


}

export class TblChemDBwhruwaterRow extends TableRowBase{
	constructor(
		public CHD_WHRU_WATER_ID?:number, 
		public CHD_WHRU_WATER_UPDATE_DATE?:Date, 
		public CHD_WHRU_WATER_TDS?:number, 
		public CHD_WHRU_WATER_TSS?:number, 
		public CHD_WHRU_WATER_IRON?:number, 
		public CHD_WHRU_WATER_SPGR?:number, 
		public CHD_WHRU_WATER_COND?:number, 
		public CHD_WHRU_WATER_HARDNESS?:number, 
		public CHD_WHRU_WATER_SODIUM?:number, 
		public CHD_WHRU_WATER_CALCIUM?:number, 
		public CHD_WHRU_WATER_PH?:number, 
		public CHD_WHRU_WATER_TEMP?:number, 
		public CHD_WHRU_WATER_MAGNESIUM?:number, 
		public CHD_WHRU_WATER_CHLORIDE?:number, 
		public CHD_WHRU_WATER_SULFATE?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBwhruwater{ return super._Table(); }


}




export class TblChemDBwqa extends TableBase {

  public rows:Array<TblChemDBwqaRow> = [];

  public tableFieldPrefix="CHD_WQA_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "CHD_WQA_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chmwqa";

	this.columns.push(new ColumnInfo('CHD_WQA_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WQA_UPDATE_DATE', 'Date', '', '', 'updated', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WQA_OP_INIT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WQA_EST_RATE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WQA_O2', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WQA_FIELD_IR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WQA_LAB_IR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WQA_WSO_IR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WQA_MNLY_IR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CHD_WQA_MNLY_LAB', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblChemDBwqaRow):TblChemDBwqaRow
  {
    return super.Add(row);
  }

  NewRow():TblChemDBwqaRow{return new TblChemDBwqaRow();}
  GetRows():Array<TblChemDBwqaRow>{return this.rows;}
  public set currentRow(value:TblChemDBwqaRow){super.__currentRow(value);}
  public get currentRow():TblChemDBwqaRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChemDBwqaRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChemDBwqaRow>{return super.__newRows();}


}

export class TblChemDBwqaRow extends TableRowBase{
	constructor(
		public CHD_WQA_ID?:number, 
		public CHD_WQA_UPDATE_DATE?:Date, 
		public CHD_WQA_OP_INIT?:string, 
		public CHD_WQA_EST_RATE?:number, 
		public CHD_WQA_O2?:number, 
		public CHD_WQA_FIELD_IR?:number, 
		public CHD_WQA_LAB_IR?:number, 
		public CHD_WQA_WSO_IR?:number, 
		public CHD_WQA_MNLY_IR?:number, 
		public CHD_WQA_MNLY_LAB?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChemDBwqa{ return super._Table(); }


}




export class TblDesignData extends TableBase {

  public rows:Array<TblDesignDataRow> = [];

  public tableFieldPrefix="DD_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "",
  "keyField": "DD_ID",
  "subTable-y": "desprm",
  "subTable": {
    "137": {
      "tableCode": "desprm",
      "code": "",
      "name": "Operating Event",
      "group": 109,
      "icon": "",
      "extraJoins": "",
      "extraFields": "",
      "fieldMapping": {}
    }
  },
  "assetField": "DD_ASSET",
  "recordTypeField-x": "DD_PARAM",
  "dataGroup": "DD_PARAM",
  "deletedFlagField": "DD_DELETED",
  "deletedDateStamp": "DD_DELTED_DATE",
  "deletedByStamp": "DD_DELETED_BY",
  "updatedDateStamp": "DD_UPDATE_DATE",
  "extraJoins": "`desprm@desprmG,DD_PARAM`lkp@ddtype,DD_PARAM_TYPE;",
  "extraFields": "desprmG.DD_PARAM_TYPE@^DDPAR_TYP`ddtype.LKP_DESC_B@DDPAR_TYP`desprmG.DD_PARAM_NAME",
  "gridColumns": [
    "DD_ASSET|cap=Asset;mnw=150",
    "DD_PARAM_TYPE|cap=Param Type;wd=100;disp=DDPAR_TYP;nofilt",
    "DD_PARAM_VALUE|cap=Value;wd=100",
    "DD_PARAM_UNIT|cap=Unit;wd=100",
    "DD_PARAM_NOTES|cap=Notes;wd=150",
    "DD_PARAM_REF|cap=Reference;wd=150"
  ],
  "defaultValues": {
    "DD_PARAM_UNIT": 1500
  }
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="desdat";

	this.columns.push(new ColumnInfo('DD_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_ASSET', 'number', 'Asset', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_PARAM', 'number', 'Name', '', '@lookuptable=desprm', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_PARAM_UNIT', 'number', 'Unit', '', '@lookupgroup=110', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_UPDATE_DATE', 'Date', '', '', 'datestamp', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_PARAM_VALUE', 'string', 'Value', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_PARAM_NOTES', 'string', 'Notes', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_PARAM_REF', 'string', 'References', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_DELETED', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_DELETED_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_DELTED_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblDesignDataRow):TblDesignDataRow
  {
    return super.Add(row);
  }

  NewRow():TblDesignDataRow{return new TblDesignDataRow();}
  GetRows():Array<TblDesignDataRow>{return this.rows;}
  public set currentRow(value:TblDesignDataRow){super.__currentRow(value);}
  public get currentRow():TblDesignDataRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblDesignDataRow>{return super.__dirtyRows();}
  public get newRows():Array<TblDesignDataRow>{return super.__newRows();}


}

export class TblDesignDataRow extends TableRowBase{
	constructor(
		public DD_ID?:number, 
		public DD_ASSET?:number, 
		public DD_PARAM?:number, 
		public DD_PARAM_UNIT?:number, 
		public DD_UPDATE_DATE?:Date, 
		public DD_PARAM_VALUE?:string, 
		public DD_PARAM_NOTES?:string, 
		public DD_PARAM_REF?:string, 
		public DD_DELETED?:number, 
		public DD_DELETED_BY?:string, 
		public DD_DELTED_DATE?:Date){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblDesignData{ return super._Table(); }


}




export class TblDesignDataHistory extends TableBase {

  public rows:Array<TblDesignDataHistoryRow> = [];

  public tableFieldPrefix="DD_HIST_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "",
  "keyField": "DD_HIST_ID",
  "assetField": "",
  "recordTypeField": "",
  "dataGroup": "DD_HIST_ASSET_ID",
  "deletedFlagField": "",
  "deletedDateStamp": "",
  "deletedByStamp": "",
  "updatedDateStamp": "",
  "extraJoins": "",
  "extraFields": "",
  "gridColumns": [
    "DD_HIST_ASSET_ID|cap=Asset;mnw=150",
    "DD_HIST_LOG_TYPE|cap=log Type;wd=90",
    "DD_HIST_ASSET_FR|cap=Asset From;mnw=150",
    "DD_HIST_ASSET_TO|cap=Asset To;mnw=150",
    "DD_HIST_DESC|cap=Description;wd=150",
    "DD_HIST_USERNAME|cap=User Name;wd=100"
  ],
  "defaultValues": {}
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="deshis";

	this.columns.push(new ColumnInfo('DD_HIST_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_HIST_LOG_TYPE', 'number', '', '', '@lookupgroup=188', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_HIST_ASSET_ID', 'number', '', '', '@lookuptable=node', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_HIST_ASSET_FR', 'number', '', '', '@lookuptable=node', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_HIST_ASSET_TO', 'number', '', '', '@lookuptable=node', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_HIST_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_HIST_DESC', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_HIST_USERNAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblDesignDataHistoryRow):TblDesignDataHistoryRow
  {
    return super.Add(row);
  }

  NewRow():TblDesignDataHistoryRow{return new TblDesignDataHistoryRow();}
  GetRows():Array<TblDesignDataHistoryRow>{return this.rows;}
  public set currentRow(value:TblDesignDataHistoryRow){super.__currentRow(value);}
  public get currentRow():TblDesignDataHistoryRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblDesignDataHistoryRow>{return super.__dirtyRows();}
  public get newRows():Array<TblDesignDataHistoryRow>{return super.__newRows();}


}

export class TblDesignDataHistoryRow extends TableRowBase{
	constructor(
		public DD_HIST_ID?:number, 
		public DD_HIST_LOG_TYPE?:number, 
		public DD_HIST_ASSET_ID?:number, 
		public DD_HIST_ASSET_FR?:number, 
		public DD_HIST_ASSET_TO?:number, 
		public DD_HIST_DATE?:Date, 
		public DD_HIST_DESC?:string, 
		public DD_HIST_USERNAME?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblDesignDataHistory{ return super._Table(); }


}




export class TblDesignDataKP extends TableBase {

  public rows:Array<TblDesignDataKPRow> = [];

  public tableFieldPrefix="DD_KP_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "",
  "keyField": "DD_KP_ID",
  "assetField": "",
  "recordTypeField": "",
  "dataGroup": "DD_KP_DD_ID",
  "deletedFlagField": "DD_KP_DELETED",
  "deletedDateStamp": "",
  "deletedByStamp": "",
  "updatedDateStamp": "",
  "extraJoins": "",
  "extraFields": "",
  "gridColumns": [
    "DD_KP_START|cap=KP Start;wd=100",
    "DD_KP_END|cap=KP End;wd=100",
    "DD_KP_VALUE|cap=KP Value;wd=100",
    "DD_KP_UNIT|cap=KP Unit;mnw=200"
  ],
  "defaultValues": {}
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="deskp";

	this.columns.push(new ColumnInfo('DD_KP_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_KP_UNIT', 'number', '', '', '@lookupgroup=110', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_KP_DD_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_KP_START', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_KP_END', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_KP_VALUE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_KP_DELETED', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblDesignDataKPRow):TblDesignDataKPRow
  {
    return super.Add(row);
  }

  NewRow():TblDesignDataKPRow{return new TblDesignDataKPRow();}
  GetRows():Array<TblDesignDataKPRow>{return this.rows;}
  public set currentRow(value:TblDesignDataKPRow){super.__currentRow(value);}
  public get currentRow():TblDesignDataKPRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblDesignDataKPRow>{return super.__dirtyRows();}
  public get newRows():Array<TblDesignDataKPRow>{return super.__newRows();}


}

export class TblDesignDataKPRow extends TableRowBase{
	constructor(
		public DD_KP_ID?:number, 
		public DD_KP_UNIT?:number, 
		public DD_KP_DD_ID?:number, 
		public DD_KP_START?:number, 
		public DD_KP_END?:number, 
		public DD_KP_VALUE?:string, 
		public DD_KP_DELETED?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblDesignDataKP{ return super._Table(); }


}




export class TblDesignDataParams extends TableBase {

  public rows:Array<TblDesignDataParamsRow> = [];

  public tableFieldPrefix="DD_PARAM_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "DD_PARAM"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="desprm";

	this.columns.push(new ColumnInfo('DD_PARAM', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_PARAM_TYPE', 'number', '', '', '@lookupgroup=109', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_PARAM_CODE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DD_PARAM_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblDesignDataParamsRow):TblDesignDataParamsRow
  {
    return super.Add(row);
  }

  NewRow():TblDesignDataParamsRow{return new TblDesignDataParamsRow();}
  GetRows():Array<TblDesignDataParamsRow>{return this.rows;}
  public set currentRow(value:TblDesignDataParamsRow){super.__currentRow(value);}
  public get currentRow():TblDesignDataParamsRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblDesignDataParamsRow>{return super.__dirtyRows();}
  public get newRows():Array<TblDesignDataParamsRow>{return super.__newRows();}


}

export class TblDesignDataParamsRow extends TableRowBase{
	constructor(
		public DD_PARAM?:number, 
		public DD_PARAM_TYPE?:number, 
		public DD_PARAM_CODE?:string, 
		public DD_PARAM_NAME?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblDesignDataParams{ return super._Table(); }


}




export class TblFailureThreats extends TableBase {

  public rows:Array<TblFailureThreatsRow> = [];

  public tableFieldPrefix="FT_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "ft",
  "lookupCode": "FT_CODE",
  "lookupText": "FT_NAME",
  "lookupGroup": "FT_GROUP",
  "gridColumns": [
    "FT_CODE|cap=Code;center;wd=60",
    "FT_NAME|cap=Name;mnw=150;mxw=200",
    "FT_GROUP|cap=Group;mnw=150;mxw=200",
    "FT_TYPE|cap=Type;mnw=250;mxw=300",
    "FT_DESC|cap=Description;mnw=250"
  ],
  "gridColumnsInAnomalies": [
    "FT_CODE|cap=Code;center;wd=60",
    "FT_NAME|cap=Name;mnw=150;mxw=200",
    "FT_GROUP|cap=Group;mnw=150;mxw=200",
    "FT_TYPE|cap=Type;mnw=250"
  ],
  "gridColumnsInSurvey": [
    "FT_CODE|cap=Code;center;wd=60",
    "FT_NAME|cap=Name;mnw=150;mxw=200",
    "FT_GROUP|cap=Group;mnw=150;mxw=200",
    "FT_TYPE|cap=Type;mnw=250",
    "FT_CORR_REL|cap=Corr Related;wd=80;center"
  ]
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="ft";

	this.columns.push(new ColumnInfo('FT_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_GROUP', 'number', '', '', '@lookupgroup=150', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_TYPE', 'number', '', '', '@lookupgroup=151', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_CODE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_CORR_REL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_DESC', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_INCLUDE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblFailureThreatsRow):TblFailureThreatsRow
  {
    return super.Add(row);
  }

  NewRow():TblFailureThreatsRow{return new TblFailureThreatsRow();}
  GetRows():Array<TblFailureThreatsRow>{return this.rows;}
  public set currentRow(value:TblFailureThreatsRow){super.__currentRow(value);}
  public get currentRow():TblFailureThreatsRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblFailureThreatsRow>{return super.__dirtyRows();}
  public get newRows():Array<TblFailureThreatsRow>{return super.__newRows();}


}

export class TblFailureThreatsRow extends TableRowBase{
	constructor(
		public FT_ID?:number, 
		public FT_GROUP?:number, 
		public FT_TYPE?:number, 
		public FT_CODE?:string, 
		public FT_NAME?:string, 
		public FT_CORR_REL?:number, 
		public FT_DESC?:string, 
		public FT_INCLUDE?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblFailureThreats{ return super._Table(); }


}




export class SysLocks extends TableBase {

  public rows:Array<SysLocksRow> = [];

  public tableFieldPrefix="LOCK_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "LOCK_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="lk";

	this.columns.push(new ColumnInfo('LOCK_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LOCK_TABLE_CODE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LOCK_RECORD_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LOCK_USER_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LOCK_START', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LOCK_END', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:SysLocksRow):SysLocksRow
  {
    return super.Add(row);
  }

  NewRow():SysLocksRow{return new SysLocksRow();}
  GetRows():Array<SysLocksRow>{return this.rows;}
  public set currentRow(value:SysLocksRow){super.__currentRow(value);}
  public get currentRow():SysLocksRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<SysLocksRow>{return super.__dirtyRows();}
  public get newRows():Array<SysLocksRow>{return super.__newRows();}


}

export class SysLocksRow extends TableRowBase{
	constructor(
		public LOCK_ID?:number, 
		public LOCK_TABLE_CODE?:string, 
		public LOCK_RECORD_ID?:number, 
		public LOCK_USER_NAME?:string, 
		public LOCK_START?:Date, 
		public LOCK_END?:Date){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():SysLocks{ return super._Table(); }


}




export class TblLookups extends TableBase {

  public rows:Array<TblLookupsRow> = [];

  public tableFieldPrefix="LKP_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "commonlookup",
  "lookupCode": "LKP_DESC_A",
  "lookupText": "LKP_DESC_B",
  "lookupGroup": "LKP_GRP_ID",
  "lookupBack": "LKP_TEXT_50_1",
  "lookupFore": "LKP_TEXT_50_2"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="lkp";

	this.columns.push(new ColumnInfo('LKP_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_GRP_ID', 'number', '', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DESC_A', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DESC_B', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_TEXT_50_1', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_TEXT_50_2', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_TEXT_255_1', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_TEXT_255_2', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_LONG_1', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_LONG_2', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_LONG_3', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_LONG_4', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DOUBLE_1', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DOUBLE_2', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DOUBLE_3', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_BOOLEAN_1', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_BOOLEAN_2', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_BOOLEAN_3', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DATE_1', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_ORDER', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_SWITCHES', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_MEMO_1', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_OLE_1', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblLookupsRow):TblLookupsRow
  {
    return super.Add(row);
  }

  NewRow():TblLookupsRow{return new TblLookupsRow();}
  GetRows():Array<TblLookupsRow>{return this.rows;}
  public set currentRow(value:TblLookupsRow){super.__currentRow(value);}
  public get currentRow():TblLookupsRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblLookupsRow>{return super.__dirtyRows();}
  public get newRows():Array<TblLookupsRow>{return super.__newRows();}


}

export class TblLookupsRow extends TableRowBase{
	constructor(
		public LKP_ID?:number, 
		public LKP_GRP_ID?:number, 
		public LKP_DESC_A?:string, 
		public LKP_DESC_B?:string, 
		public LKP_TEXT_50_1?:string, 
		public LKP_TEXT_50_2?:string, 
		public LKP_TEXT_255_1?:string, 
		public LKP_TEXT_255_2?:string, 
		public LKP_LONG_1?:number, 
		public LKP_LONG_2?:number, 
		public LKP_LONG_3?:number, 
		public LKP_LONG_4?:number, 
		public LKP_DOUBLE_1?:number, 
		public LKP_DOUBLE_2?:number, 
		public LKP_DOUBLE_3?:number, 
		public LKP_BOOLEAN_1?:number, 
		public LKP_BOOLEAN_2?:number, 
		public LKP_BOOLEAN_3?:number, 
		public LKP_DATE_1?:Date, 
		public LKP_ORDER?:number, 
		public LKP_SWITCHES?:number, 
		public LKP_MEMO_1?:string, 
		public LKP_OLE_1?:string, 
		public LKP_UPDATE_DATE?:Date){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblLookups{ return super._Table(); }


}




export class TblMatrix extends TableBase {

  public rows:Array<TblMatrixRow> = [];

  public tableFieldPrefix="MTX_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="mtx";

	this.columns.push(new ColumnInfo('MTX_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('MTX_SEV_LKP_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('MTX_LIK_LKP_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('MTX_BACK', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('MTX_FORE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblMatrixRow):TblMatrixRow
  {
    return super.Add(row);
  }

  NewRow():TblMatrixRow{return new TblMatrixRow();}
  GetRows():Array<TblMatrixRow>{return this.rows;}
  public set currentRow(value:TblMatrixRow){super.__currentRow(value);}
  public get currentRow():TblMatrixRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblMatrixRow>{return super.__dirtyRows();}
  public get newRows():Array<TblMatrixRow>{return super.__newRows();}


}

export class TblMatrixRow extends TableRowBase{
	constructor(
		public MTX_ID?:number, 
		public MTX_SEV_LKP_ID?:number, 
		public MTX_LIK_LKP_ID?:number, 
		public MTX_BACK?:string, 
		public MTX_FORE?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblMatrix{ return super._Table(); }


}




export class TblNodesAttrib extends TableBase {

  public rows:Array<TblNodesAttribRow> = [];

  public tableFieldPrefix="NODE_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "nodes,lookup",
  "lookupCode": "NODE_ID",
  "lookupText": "NODE_DESC"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="node";

	this.columns.push(new ColumnInfo('REC_TAG', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_ID', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_DESC', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_GROUP', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_CLASS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_TAG', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_ASSET_TYPE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SAP_REF', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SAP_TAG', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SAP_DESC', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('REF_DWG', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SPLI', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('VUL_EQUT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('VUL_CAT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_GROUP_B', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITEM_TYPE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('OREDA_CLSS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('OREDA_SUBUNIT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('OREDA_CPNT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LL_FOLDER_OBJID', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('REC_UPDATED', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITEM_TYPE_TAG', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITEM_USED', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SCE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RBI_INCLUDE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SGS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_ASSET_TYPE_OLD', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PS_CODES', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblNodesAttribRow):TblNodesAttribRow
  {
    return super.Add(row);
  }

  NewRow():TblNodesAttribRow{return new TblNodesAttribRow();}
  GetRows():Array<TblNodesAttribRow>{return this.rows;}
  public set currentRow(value:TblNodesAttribRow){super.__currentRow(value);}
  public get currentRow():TblNodesAttribRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblNodesAttribRow>{return super.__dirtyRows();}
  public get newRows():Array<TblNodesAttribRow>{return super.__newRows();}


}

export class TblNodesAttribRow extends TableRowBase{
	constructor(
		public REC_TAG?:number, 
		public NODE_ID?:string, 
		public NODE_DESC?:string, 
		public NODE_GROUP?:string, 
		public NODE_CLASS?:number, 
		public NODE_TAG?:number, 
		public NODE_ASSET_TYPE?:string, 
		public SAP_REF?:string, 
		public SAP_TAG?:number, 
		public SAP_DESC?:string, 
		public REF_DWG?:number, 
		public SPLI?:string, 
		public VUL_EQUT?:string, 
		public VUL_CAT?:string, 
		public NODE_GROUP_B?:string, 
		public ITEM_TYPE?:string, 
		public OREDA_CLSS?:string, 
		public OREDA_SUBUNIT?:string, 
		public OREDA_CPNT?:string, 
		public LL_FOLDER_OBJID?:string, 
		public REC_UPDATED?:Date, 
		public ITEM_TYPE_TAG?:number, 
		public ITEM_USED?:number, 
		public SCE?:number, 
		public RBI_INCLUDE?:number, 
		public CE?:number, 
		public SGS?:number, 
		public NODE_ASSET_TYPE_OLD?:string, 
		public PS_CODES?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblNodesAttrib{ return super._Table(); }


}




export class TblUserParam extends TableBase {

  public rows:Array<TblUserParamRow> = [];

  public tableFieldPrefix="USER_PARAM_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="param";

	this.columns.push(new ColumnInfo('USER_PARAM_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_PARAM_USER_ID', 'number', '', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_LKP_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_TEXT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblUserParamRow):TblUserParamRow
  {
    return super.Add(row);
  }

  NewRow():TblUserParamRow{return new TblUserParamRow();}
  GetRows():Array<TblUserParamRow>{return this.rows;}
  public set currentRow(value:TblUserParamRow){super.__currentRow(value);}
  public get currentRow():TblUserParamRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblUserParamRow>{return super.__dirtyRows();}
  public get newRows():Array<TblUserParamRow>{return super.__newRows();}


}

export class TblUserParamRow extends TableRowBase{
	constructor(
		public USER_PARAM_ID?:number, 
		public USER_PARAM_USER_ID?:number, 
		public PARAM_ID?:number, 
		public PARAM_LKP_ID?:number, 
		public PARAM_TEXT?:string, 
		public PARAM_UPDATE_DATE?:Date){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblUserParam{ return super._Table(); }


}




export class TblRefFiles extends TableBase {

  public rows:Array<TblRefFilesRow> = [];

  public tableFieldPrefix="RF_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "attachment",
  "keyField": "RF_ID",
  "assetField": "RF_ASSET",
  "recordTypeField-x": "RF_TYPE",
  "deletedFlagField": "RF_DELETED",
  "deletedDateStamp": "RF_DELETED_DATE",
  "deletedByStamp": "RF_DELETED_BY",
  "updatedDateStamp": "RF_UPDDATE",
  "updatedByStamp": "RF_UPDBY",
  "extra": {
    "gridColumnsInAttachments": {
      "joins": "",
      "fields-x": "TBL_RF_PATH.LKP_MEMO_1@RF_PATH_LOC"
    }
  },
  "gridColumns": [
    "RF_FILENAME|cap=Ref. File Name;center;mnw=100",
    "RF_DESC|cap=Title;mnw=250",
    "RF_NOTES|cap=Notes;mnw=150;center",
    "RF_ASSET|cap=Asset;mnw=150",
    "RF_TYPE|cap=Type;wd=100",
    "RF_PATH|cap=Path;wd=100",
    "RF_REVNO|cap=Rev. No.;wd=100",
    "RF_REVDATE|cap=Rev. Date;wd=100",
    "RF_LLID|cap=Document Id;wd=100",
    "RF_CLASS|cap=Classification;wd=100",
    "RF_UPDBY|cap=Updated By;wd=100",
    "RF_CONTRACTOR|cap=Contractor;wd=100",
    "RF_REF_NO|cap=Reference no.;wd=100"
  ],
  "gridColumnsAttachment-X": [
    "RF_DESC|cap=Title@;mnw=250",
    "RF_TYPE|cap=Type;wd=160",
    "RF_CLASS|cap=Classification;wd=160",
    "RF_REVDATE|cap=Rev.Date;wd=120;center",
    "RF_PATH|cap=Path;wd=100"
  ],
  "gridColumnsInAnomalies": [
    "RF_DESC|cap=Title;mnw=250",
    "RF_TYPE|cap=Type;wd=150",
    "RF_CLASS|cap=Classification;wd=150",
    "RF_REVDATE|cap=Rev.Date;wd=80;center"
  ],
  "gridColumnsInAttachments": [
    "RF_DESC|cap=Title;mnw=250",
    "RF_TYPE|cap=Type;wd=150",
    "RF_CLASS|cap=Classification;wd=150",
    "RF_REVDATE|cap=Rev.Date;wd=80;center",
    "RF_PATH|cap=Path;wd=100",
    "RF_FILENAME|cap=File;wd=100",
    "TBL_RF_PATH.LKP_MEMO_1@RF_PATH_LOC|cap=Path;mnw=250"
  ]
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="rf";

	this.columns.push(new ColumnInfo('RF_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_ASSET', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_PATH', 'number', '', '', '@lookupgroup=142', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_CLASS', 'number', '', '', '@lookupgroup=140', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_TYPE', 'number', '', '', '@lookupgroup=139', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_DESC', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_UPLDATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_REF_NO', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_REVNO', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_REVDATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_FILENAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_REFNOX', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_CONTRACTOR', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_LLID', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_UPDBY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_UPDDATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_NOTES', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_DELETED', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_DELETED_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_DELETED_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblRefFilesRow):TblRefFilesRow
  {
    return super.Add(row);
  }

  NewRow():TblRefFilesRow{return new TblRefFilesRow();}
  GetRows():Array<TblRefFilesRow>{return this.rows;}
  public set currentRow(value:TblRefFilesRow){super.__currentRow(value);}
  public get currentRow():TblRefFilesRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblRefFilesRow>{return super.__dirtyRows();}
  public get newRows():Array<TblRefFilesRow>{return super.__newRows();}


}

export class TblRefFilesRow extends TableRowBase{
	constructor(
		public RF_ID?:number, 
		public RF_ASSET?:number, 
		public RF_PATH?:number, 
		public RF_CLASS?:number, 
		public RF_TYPE?:number, 
		public RF_DESC?:string, 
		public RF_UPLDATE?:Date, 
		public RF_REF_NO?:string, 
		public RF_REVNO?:string, 
		public RF_REVDATE?:Date, 
		public RF_FILENAME?:string, 
		public RF_REFNOX?:string, 
		public RF_CONTRACTOR?:string, 
		public RF_LLID?:string, 
		public RF_UPDBY?:string, 
		public RF_UPDDATE?:Date, 
		public RF_NOTES?:string, 
		public RF_DELETED?:number, 
		public RF_DELETED_BY?:string, 
		public RF_DELETED_DATE?:Date){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblRefFiles{ return super._Table(); }


}




export class TblSurvey extends TableBase {

  public rows:Array<TblSurveyRow> = [];

  public tableFieldPrefix="SVY_MAIN_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "SVY_MAIN_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="svy";

	this.columns.push(new ColumnInfo('SVY_MAIN_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_MAIN_TITLE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_MAIN_TYPE_LKP_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_MAIN_DATE_START', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_MAIN_DATE_END', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SYV_MAIN_CONTRACTOR', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblSurveyRow):TblSurveyRow
  {
    return super.Add(row);
  }

  NewRow():TblSurveyRow{return new TblSurveyRow();}
  GetRows():Array<TblSurveyRow>{return this.rows;}
  public set currentRow(value:TblSurveyRow){super.__currentRow(value);}
  public get currentRow():TblSurveyRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblSurveyRow>{return super.__dirtyRows();}
  public get newRows():Array<TblSurveyRow>{return super.__newRows();}


}

export class TblSurveyRow extends TableRowBase{
	constructor(
		public SVY_MAIN_ID?:number, 
		public SVY_MAIN_TITLE?:string, 
		public SVY_MAIN_TYPE_LKP_ID?:number, 
		public SVY_MAIN_DATE_START?:Date, 
		public SVY_MAIN_DATE_END?:Date, 
		public SYV_MAIN_CONTRACTOR?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblSurvey{ return super._Table(); }


}




export class TblSurveyEvent extends TableBase {

  public rows:Array<TblSurveyEventRow> = [];

  public tableFieldPrefix="SVY_EVT_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "SVY_EVT_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="svyevt";

	this.columns.push(new ColumnInfo('SVY_EVT_ID', 'number', 'ID', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_EVT_DESC', 'string', 'Event Type', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_EVT_ACTIVE', 'number', 'Active', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblSurveyEventRow):TblSurveyEventRow
  {
    return super.Add(row);
  }

  NewRow():TblSurveyEventRow{return new TblSurveyEventRow();}
  GetRows():Array<TblSurveyEventRow>{return this.rows;}
  public set currentRow(value:TblSurveyEventRow){super.__currentRow(value);}
  public get currentRow():TblSurveyEventRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblSurveyEventRow>{return super.__dirtyRows();}
  public get newRows():Array<TblSurveyEventRow>{return super.__newRows();}


}

export class TblSurveyEventRow extends TableRowBase{
	constructor(
		public SVY_EVT_ID?:number, 
		public SVY_EVT_DESC?:string, 
		public SVY_EVT_ACTIVE?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblSurveyEvent{ return super._Table(); }


}




export class TblSurveyHeader extends TableBase {

  public rows:Array<TblSurveyHeaderRow> = [];

  public tableFieldPrefix="SVY_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "",
  "keyField": "SVY_HDR_ID",
  "subTable-y": "",
  "subTable": {
    "": {
      "tableCode": "svy",
      "code": "",
      "name": "Survey Event",
      "extraJoins": "",
      "extraFields": "",
      "fieldMapping": {}
    }
  },
  "assetField": "SVY_HDR_NOD_ID",
  "recordTypeField-x": "",
  "dataGroup": "",
  "deletedFlagField": "SVY_HDR_DELETED",
  "deletedDateStamp": "",
  "deletedByStamp": "",
  "updatedDateStamp": "SVY_HDR_UPDATE_DATE",
  "updatedByStamp": "SVY_HDR_UPDATE_BY",
  "extraJoins": "`svyevt,SVY_HDR_EVT_ID;`svy,SVY_HDR_MAIN_ID;`svypos,SVY_HDR_START_POS_ID;",
  "extraFields": "SVY_EVT_DESC`SVY_MAIN_DATE_START`SVY_MAIN_DATE_END`SVY_MAIN_TITLE`SVY_POS_KP`SVY_POS_KP@KP_END",
  "gridColumns": [
    "SVY_HDR_NOD_ID|cap=Asset;mnw=150",
    "SVY_EVT_DESC|cap=Event;wd=200",
    "SVY_HDR_EVT_NUM|cap=Event #;wd=80;center",
    "SVY_MAIN_DATE_START|cap=Start Datetime;wd=100",
    "SVY_MAIN_DATE_END|cap=End Datetime;wd=100",
    "SVY_POS_KP|cap=Start KP;wd=60;center;",
    "SVY_POS_KP|cap=End KP;wd=60;center;disp=KP_END;nofilt",
    "SVY_HDR_ASS_DATE|cap=Assess Date;wd=100",
    "SVY_HDR_ASS_BY|cap=Assess By;wd=100",
    "SVY_HDR_COLOUR|cap=Color;wd=60;center;color",
    "SVY_HDR_UPDATE_DATE|cap=Updated Date;wd=100",
    "SVY_HDR_UPDATE_BY|cap=Updated By;wd=100"
  ],
  "gridRelatedEvents": [
    "SVY_HDR_NOD_ID|cap=Asset Location;mnw=150",
    "SVY_MAIN_TITLE|cap=Survey Campaign;wd=200",
    "SVY_EVT_DESC|cap=Event;wd=150",
    "SVY_HDR_EVT_NUM|cap=Event #;wd=80;center"
  ],
  "defaultValues": {}
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="svyhdr";

	this.columns.push(new ColumnInfo('SVY_HDR_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_NOD_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_COLOUR', 'number', '', '', '@lookupgroup=156', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_MAIN_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_EVT_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_EVT_NUM', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_START_POS_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_END_POS_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_RECORDER', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_COMMENT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_UPDATE_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ASS_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ASS_BY', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ANOM_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_A', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_B', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_C', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_D', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_E', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_F', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_G', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_H', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_I', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_J', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_A', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_B', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_C', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_D', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_E', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_F', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_G', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_H', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_I', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_J', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_MEMO_A', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_MEMO_B', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_MEMO_C', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_MEMO_D', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_A', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_B', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_C', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_D', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_E', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_F', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INTEGER_A', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INTEGER_B', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INTEGER_C', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INTEGER_D', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INTEGER_E', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ASS_DETAILS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_AB_HDR_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_PAR_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ANOM_CODE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ANOM_COMMENT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_F', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_G', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_H', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_I', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_J', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_K', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_L', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_A', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_B', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_C', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_D', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_E', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_K', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_M', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_N', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INTEGER_F', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_NEXUS_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_L', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_M', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_N', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_O', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_P', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_Q', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_DELETED', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INT', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_LONG', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblSurveyHeaderRow):TblSurveyHeaderRow
  {
    return super.Add(row);
  }

  NewRow():TblSurveyHeaderRow{return new TblSurveyHeaderRow();}
  GetRows():Array<TblSurveyHeaderRow>{return this.rows;}
  public set currentRow(value:TblSurveyHeaderRow){super.__currentRow(value);}
  public get currentRow():TblSurveyHeaderRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblSurveyHeaderRow>{return super.__dirtyRows();}
  public get newRows():Array<TblSurveyHeaderRow>{return super.__newRows();}


}

export class TblSurveyHeaderRow extends TableRowBase{
	constructor(
		public SVY_HDR_ID?:number, 
		public SVY_HDR_NOD_ID?:number, 
		public SVY_HDR_COLOUR?:number, 
		public SVY_HDR_MAIN_ID?:number, 
		public SVY_HDR_EVT_ID?:number, 
		public SVY_HDR_EVT_NUM?:number, 
		public SVY_HDR_START_POS_ID?:number, 
		public SVY_HDR_END_POS_ID?:number, 
		public SVY_HDR_RECORDER?:string, 
		public SVY_HDR_COMMENT?:string, 
		public SVY_HDR_UPDATE_DATE?:Date, 
		public SVY_HDR_UPDATE_BY?:string, 
		public SVY_HDR_ASS_DATE?:Date, 
		public SVY_HDR_ASS_BY?:string, 
		public SVY_HDR_ANOM_ID?:number, 
		public SVY_YESNO_A?:number, 
		public SVY_YESNO_B?:number, 
		public SVY_YESNO_C?:number, 
		public SVY_YESNO_D?:number, 
		public SVY_YESNO_E?:number, 
		public SVY_YESNO_F?:number, 
		public SVY_YESNO_G?:number, 
		public SVY_YESNO_H?:number, 
		public SVY_YESNO_I?:number, 
		public SVY_YESNO_J?:number, 
		public SVY_TEXT_A?:string, 
		public SVY_TEXT_B?:string, 
		public SVY_TEXT_C?:string, 
		public SVY_TEXT_D?:string, 
		public SVY_TEXT_E?:string, 
		public SVY_TEXT_F?:string, 
		public SVY_TEXT_G?:string, 
		public SVY_TEXT_H?:string, 
		public SVY_TEXT_I?:string, 
		public SVY_TEXT_J?:string, 
		public SVY_MEMO_A?:string, 
		public SVY_MEMO_B?:string, 
		public SVY_MEMO_C?:string, 
		public SVY_MEMO_D?:string, 
		public SVY_DATETIME_A?:Date, 
		public SVY_DATETIME_B?:Date, 
		public SVY_DATETIME_C?:Date, 
		public SVY_DATETIME_D?:Date, 
		public SVY_DATETIME_E?:Date, 
		public SVY_DATETIME_F?:Date, 
		public SVY_INTEGER_A?:number, 
		public SVY_INTEGER_B?:number, 
		public SVY_INTEGER_C?:number, 
		public SVY_INTEGER_D?:number, 
		public SVY_INTEGER_E?:number, 
		public SVY_HDR_ASS_DETAILS?:string, 
		public SVY_AB_HDR_ID?:number, 
		public SVY_HDR_PAR_ID?:number, 
		public SVY_HDR_ANOM_CODE?:string, 
		public SVY_HDR_ANOM_COMMENT?:string, 
		public SVY_SINGLE_F?:number, 
		public SVY_SINGLE_G?:number, 
		public SVY_SINGLE_H?:number, 
		public SVY_SINGLE_I?:number, 
		public SVY_SINGLE_J?:number, 
		public SVY_SINGLE_K?:number, 
		public SVY_SINGLE_L?:number, 
		public SVY_SINGLE_A?:number, 
		public SVY_SINGLE_B?:number, 
		public SVY_SINGLE_C?:number, 
		public SVY_SINGLE_D?:number, 
		public SVY_SINGLE_E?:number, 
		public SVY_TEXT_K?:string, 
		public SVY_SINGLE_M?:number, 
		public SVY_SINGLE_N?:number, 
		public SVY_INTEGER_F?:number, 
		public SVY_HDR_NEXUS_ID?:number, 
		public SVY_TEXT_L?:string, 
		public SVY_TEXT_M?:string, 
		public SVY_TEXT_N?:string, 
		public SVY_TEXT_O?:string, 
		public SVY_TEXT_P?:string, 
		public SVY_TEXT_Q?:string, 
		public SVY_HDR_DELETED?:number, 
		public SVY_INT?:number, 
		public SVY_LONG?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblSurveyHeader{ return super._Table(); }


}




export class TblSurveyPosition extends TableBase {

  public rows:Array<TblSurveyPositionRow> = [];

  public tableFieldPrefix="SVY_POS_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "SVY_POS_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="svypos";

	this.columns.push(new ColumnInfo('SVY_POS_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_DATE_TIME', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_KP', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_DEPTH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_EASTING', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_NORTHING', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_VID_TAG', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_OFFSET', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_HEADING', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_PITCH', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_ROLL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_ALTITUDE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_TEMPERATURE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_LONGITUDE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_LATITUDE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_XCOORD', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_YCOORD', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_ZCOORD', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_VIDEO_CTR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblSurveyPositionRow):TblSurveyPositionRow
  {
    return super.Add(row);
  }

  NewRow():TblSurveyPositionRow{return new TblSurveyPositionRow();}
  GetRows():Array<TblSurveyPositionRow>{return this.rows;}
  public set currentRow(value:TblSurveyPositionRow){super.__currentRow(value);}
  public get currentRow():TblSurveyPositionRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblSurveyPositionRow>{return super.__dirtyRows();}
  public get newRows():Array<TblSurveyPositionRow>{return super.__newRows();}


}

export class TblSurveyPositionRow extends TableRowBase{
	constructor(
		public SVY_POS_ID?:number, 
		public SVY_POS_DATE_TIME?:Date, 
		public SVY_POS_KP?:number, 
		public SVY_POS_DEPTH?:number, 
		public SVY_POS_EASTING?:number, 
		public SVY_POS_NORTHING?:number, 
		public SVY_POS_VID_TAG?:number, 
		public SVY_POS_OFFSET?:number, 
		public SVY_POS_HEADING?:number, 
		public SVY_POS_PITCH?:number, 
		public SVY_POS_ROLL?:number, 
		public SVY_POS_ALTITUDE?:number, 
		public SVY_POS_TEMPERATURE?:number, 
		public SVY_POS_LONGITUDE?:number, 
		public SVY_POS_LATITUDE?:number, 
		public SVY_POS_XCOORD?:number, 
		public SVY_POS_YCOORD?:number, 
		public SVY_POS_ZCOORD?:number, 
		public SVY_POS_UPDATE_DATE?:Date, 
		public SVY_POS_VIDEO_CTR?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblSurveyPosition{ return super._Table(); }


}




export class TblTreeStruc extends TableBase {

  public rows:Array<TblTreeStrucRow> = [];

  public tableFieldPrefix="TRE_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "tree",
  "keyField": "TRE_NOD_TAG",
  "parentKeyField": "TRE_NOD_TAG_PAR",
  "locationField": "TRE_NOD_LOC",
  "orderField": "TRE_NOD_ORDER",
  "groupField": "TRE_DAT_TYPE",
  "dataField": "TRE_DAT_TAG"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="tre";

	this.columns.push(new ColumnInfo('TRE_NOD_TAG', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_NOD_TAG_PAR', 'number', '', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_NOD_LOC', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_NOD_ORDER', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_DAT_TYPE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_DAT_TAG', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_NOD_SEL', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblTreeStrucRow):TblTreeStrucRow
  {
    return super.Add(row);
  }

  NewRow():TblTreeStrucRow{return new TblTreeStrucRow();}
  GetRows():Array<TblTreeStrucRow>{return this.rows;}
  public set currentRow(value:TblTreeStrucRow){super.__currentRow(value);}
  public get currentRow():TblTreeStrucRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblTreeStrucRow>{return super.__dirtyRows();}
  public get newRows():Array<TblTreeStrucRow>{return super.__newRows();}


}

export class TblTreeStrucRow extends TableRowBase{
	constructor(
		public TRE_NOD_TAG?:number, 
		public TRE_NOD_TAG_PAR?:number, 
		public TRE_NOD_LOC?:string, 
		public TRE_NOD_ORDER?:number, 
		public TRE_DAT_TYPE?:number, 
		public TRE_DAT_TAG?:number, 
		public TRE_NOD_SEL?:number, 
		public TRE_UPDATE_DATE?:Date){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblTreeStruc{ return super._Table(); }


}




export class TblUsers extends TableBase {

  public rows:Array<TblUsersRow> = [];

  public tableFieldPrefix="USER_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "users",
  "lookupText": "USER_NAME",
  "lookupTextAsValue": true
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="users";

	this.columns.push(new ColumnInfo('USER_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_PREFERENCES', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblUsersRow):TblUsersRow
  {
    return super.Add(row);
  }

  NewRow():TblUsersRow{return new TblUsersRow();}
  GetRows():Array<TblUsersRow>{return this.rows;}
  public set currentRow(value:TblUsersRow){super.__currentRow(value);}
  public get currentRow():TblUsersRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblUsersRow>{return super.__dirtyRows();}
  public get newRows():Array<TblUsersRow>{return super.__newRows();}


}

export class TblUsersRow extends TableRowBase{
	constructor(
		public USER_ID?:number, 
		public USER_NAME?:string, 
		public USER_UPDATE_DATE?:Date, 
		public USER_PREFERENCES?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblUsers{ return super._Table(); }


}




export class QryRefLinks extends TableBase {

  public rows:Array<QryRefLinksRow> = [];

  public tableFieldPrefix="RFL_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "links",
  "keyField": "RFL_ID",
  "dataGroup": "RFL_GROUP",
  "gridColumns": [
    "RFL_SOURCE|cap=Link Type;center;wd=100",
    "RFL_DESC|cap=Details;mnw=150"
  ]
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="vwrfl";

	this.columns.push(new ColumnInfo('RFL_ID', 'string', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RFL_SOURCE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RFL_DESC', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:QryRefLinksRow):QryRefLinksRow
  {
    return super.Add(row);
  }

  NewRow():QryRefLinksRow{return new QryRefLinksRow();}
  GetRows():Array<QryRefLinksRow>{return this.rows;}
  public set currentRow(value:QryRefLinksRow){super.__currentRow(value);}
  public get currentRow():QryRefLinksRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<QryRefLinksRow>{return super.__dirtyRows();}
  public get newRows():Array<QryRefLinksRow>{return super.__newRows();}


}

export class QryRefLinksRow extends TableRowBase{
	constructor(
		public RFL_ID?:string, 
		public RFL_SOURCE?:string, 
		public RFL_DESC?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():QryRefLinks{ return super._Table(); }


}
