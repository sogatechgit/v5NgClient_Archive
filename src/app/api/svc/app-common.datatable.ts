import {
  ILookupTableConfig,
  IRegularTableConfig,
} from './../mod/app-common.classes';
import { FormGroup, FormControl } from '@angular/forms';
import { config } from 'rxjs';
/**************************************************************************************************
 * Note(s):
 *   1. 2019/10/03 - Pending enhancement on unsubscribing when unsuccessful request did not
 *                   return. Solution is to create a garbage collection routine that will
 *                   unsubscribe all subscriptions that are still in the collection even
 *                   after a long period from the time they were requested (say... 5mins)
 **************************************************************************************************/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { ColumnInfo } from './../mod/app-column.model';
import { TableLinkCollection } from './../mod/app-table-link.model';
import { KeyValuePair } from '../mod/app-common.model';
import { AppReturn } from '../mod/app-return.model';
import { AppCommonMethods } from './app-common.methods';
import { AppCommonMethodsService } from './app-common-methods.service';
import { ILookupTableParams } from '../mod/app-common.classes';

export class TableBase extends AppCommonMethods {
  constructor(
    public http: HttpClient,
    public apiUrl: string,
    public tables: Array<any>,
    public apiCommon: AppCommonMethodsService
  ) {
    super();
    // clear any pending subscription
    // this.apiCommon.UnSubscribe(null, true);
  }

  public apiHttp: HttpClient;
  public tableCode: string;
  public columns: Array<ColumnInfo> = [];
  public stampLinkedFields: Array<string> = [];
  public keyFields: Array<ColumnInfo> = [];
  public keyUniqueFields: Array<ColumnInfo> = [];
  public keyGroupFields: Array<ColumnInfo> = [];
  public keySortFields: Array<ColumnInfo> = [];
  public keyDisplayFields: Array<ColumnInfo> = [];

  public rows: Array<any> = [];
  public clientConfig: any = {};

  public tableLinkCollection: TableLinkCollection = new TableLinkCollection();

  //public tableRelations: Map<string, Relation> = new Map<string, Relation>();
  public tableRelations: Array<Relation> = [];

  public lastRequestDataParams: any = {};

  /* Dictionary of TableLink objects
   {
      "<childTableCode>":TableLink(this,childTable)
   }
   */
  //public TableLinks:any = null;

  // initial value is undefined to allow null value when
  // non of the tables links to thi particular table
  public _parentTable: any = undefined;

  private __Item: any = {};
  public Item(key: number, groupId?: number): any {
    let ret: any = this.__Item['r_' + String(key)];
    if (!ret && groupId != undefined) {
      //this.GetRowById(key);
      this.GetRowsByGroup({ key: groupId });
    }
    return ret;
  }

  public PurgeAll() {
    let dataRows: Array<any> = this.GetRows();
    while (dataRows.length) {
      const item = dataRows[0];
      let itemKey: string = 'r_' + String(item[this.keyName]);
      delete this.__Item[itemKey]; // remove from index object
      dataRows.splice(0, 1);
    }
  }

  public Purge(key: number, removeFromState?: boolean) {
    /**
     * Executes deletion of record from the client row state collection
     */

    if (removeFromState == undefined) removeFromState = false;

    let keyField: string = this.keyName;
    let itemKey: string = 'r_' + String(key);
    let item: any = this.__Item[itemKey];

    if (item) {
      item.isDeleting = true;
      if (removeFromState || item.isNew) {
        // purge from the client's memory
        delete this.__Item[itemKey]; // remove from index object

        // remove from rows array

        // find index of object
        // .findIndex(obj => obj.id == 3
        let dataRows: Array<any> = this.GetRows();
        let itemIndex: number = dataRows.findIndex(
          (elem) => elem[keyField] == key
        );

        // remove element from array
        if (itemIndex != -1) dataRows.splice(itemIndex, 1);
      }
    }

    return;

    //this.rows.find(myObj => myObj.id < 0)

    if (item) delete this.__Item[itemKey];
  }

  public pendingRequest: boolean = false;

  private _derivedRecords: Array<any> = [];
  private _derivedTable: any;

  private _currentRow: any = null;

  public set derivedTable(table: any) {
    this._derivedTable = table;
    this._derivedRecords = this._derivedTable.rows;
  }

  protected TableLinks(): Array<string> {
    return null;
  }
  protected Links(): Array<any> {
    return null;
  }

  get parentTable(): any {
    if (this._parentTable == undefined) {
      // get parent table
    }
    return this._parentTable;
  }

  get roles(): Array<string> {
    if (this.clientConfig.roles) return this.clientConfig.roles.split(',');
    return [];
  }

  get keyCol(): ColumnInfo {
    return this.keyFields[0];
  }

  get keyName(): string {
    return this.keyCol.name;
  }

  get lkpValue(): ColumnInfo {
    return this.keyCol;
  }
  get lkpDisplay(): ColumnInfo {
    if (this.keyDisplayFields.length != 0) {
      // return the last element of the display fields array
      return this.keyDisplayFields[this.keyDisplayFields.length - 1];
    } else {
      return null;
    }
  }
  get lkpDisplay1(): ColumnInfo {
    if (this.keyDisplayFields.length != 0) {
      // return the last element of the display fields array
      return this.keyDisplayFields[0];
    } else {
      return null;
    }
  }

  get grpCol(): ColumnInfo {
    return this.keyGroupFields[0];
  }

  get tblUrl(): string {
    return this.apiUrl + '/' + this.tableCode;
  }

  get keyIndices(): string {
    return this.GetColumnIndices(this.keyFields);
  }
  get groupIndices(): string {
    return this.GetColumnIndices(this.keyGroupFields);
  }

  get noCurrent(): boolean {
    return this.__currentRow() == null;
  }

  get lookupDef(): ILookupTableParams {
    let ret: ILookupTableParams = {};
    let isValid: boolean = false;

    const code = this.LookupCodeField;
    const text = this.LookupTextField;
    const fore = this.LookupForeField;
    const back = this.LookupBackField;
    const group = this.LookupGroupField;

    ret.tableCode = this.tableCode;
    ret.mapInfo = { key: this.keyName };

    if (group) ret.groupField = group.name;
    if (group) ret.mapInfo.group = group.name;
    //if(fore)

    let fields: string = code ? code.name : '';

    if (code) ret.mapInfo.code = code.name;

    if (text) {
      ret.mapInfo.text = text.name;
      fields += (fields.length ? ',' : '') + text.name;
    }
    if (fore) {
      ret.mapInfo.fore = fore.name;
      fields += (fields.length ? ',' : '') + fore.name;
    }
    if (back) {
      ret.mapInfo.back = back.name;
      fields += (fields.length ? ',' : '') + back.name;
    }

    // prefix mandatory field(s), ie. key [and group]
    if (fields.length) {
      ret.fields =
        this.keyName + ',' + (group ? group.name + ',' : '') + fields;
    } else {
      return null;
    }

    // // FIELDS: <ID>,<GROUP>,<CODE>,<TEXT>,<FORE>,<BACK>

    return ret;
  }

  GetDataForm(fieldValues?: any): FormGroup {
    // if fieldValues is the actual row object, it is like binding/scattering the row the the new form object
    if (!fieldValues) fieldValues = {};
    const ret = new FormGroup({});
    this.columns.forEach((c) =>
      ret.addControl(
        c.name,
        new FormControl(
          fieldValues[c.name] != undefined ? fieldValues[c.name] : null
        )
      )
    );
    if (!ret.get('UNKNOWN')) ret.addControl('UNKNOWN', new FormControl(null));
    return ret;
  }

  protected __dirtyRows(parentId?: number): Array<any> {
    if (parentId == undefined) {
      return this.GetRows().filter((e) => e.isDirty);
    } else {
      let groupFieldObj: ColumnInfo = this.keyGroupFields[0];
      if (groupFieldObj == null) return [];
      let groupField: string = this.keyGroupFields[0].name;
      return this.GetRows().filter(
        (e) => e.isDirty && e[groupField] == parentId
      );
    }
  }

  public __dirtyChildren(): Array<any> {
    let ret: Array<any> = [];
    for (var key in this.childrenTable) {
      ret.push(this.childrenTable[key]);
    }
    return ret;
  }

  protected __newRows(): Array<any> {
    return this.GetRows().filter((e) => e._newId != undefined);
  }

  get forRestoreColumns(): Array<ColumnInfo> {
    return this.columns.filter((c: ColumnInfo) => c.IsForRestore);
  }

  get toPostData(): any {
    let ret: Array<any> = [];

    // collect all updated/new records
    //let toPost: Array<any> = this.__dirtyRows();
    let toPost: Array<any> = this.GetRows().filter((e) => e.toSubmit);
    toPost.forEach((e) => {
      ret.push(e.toPostData);
    });

    return ret;
  }

  GetColumnType(fieldName: string): string {
    const col: ColumnInfo = this.columns.find((f) => f.name == fieldName);
    if (!col) return null;
    return col.type;
  }

  set currentKey(value: number) {
    // sets the current record given the id
    let rec: any = this.Item(value);
    if (rec) {
      rec.SetAsCurrent();
    } else {
      this._cl('record not found!');
      this.__currentRow(null); // set current row to null
    }
  }
  get currentKey(): number {
    if (!this.__currentRow()) return undefined; // if not current row is set

    return this.__currentRow()[this.keyName];
  }

  protected __currentRow(value?: any): any {
    // returns the current row set in the table
    // this is the same method called from in the specific derived table object's get/set properties

    let isNull: boolean = this.isNullVal(value);

    if (isNull) {
      if (this._currentRow != null) this._currentRow.UnSetRestoreValues();
      this._currentRow = null;
    } else if (value != undefined) {
      // remove restore value of the previous current row
      if (this._currentRow != null) this._currentRow.UnSetRestoreValues();

      // set current row of the table equal to the argument row object
      this._currentRow = value;

      // set restore value of the new current row
      this._currentRow.SetRestoreValues();
    }

    // return current row
    return this._currentRow;
  }

  public ChildRowWithKey(
    childTableCode: string,
    row: any,
    groupId?: number
  ): KeyValuePair {
    let ret: KeyValuePair;

    let child: any = this.ChildTable(childTableCode);

    if (child) {
      // iterate through the links definition and look for one which corresponds to
      // this child table. this is to identify the parent field to use when linking
      // a parent field to the child key field
      //

      this.Links().forEach((lnk) => {
        if (lnk.child_code == childTableCode) {
          if (lnk.link_type == '1to1' || lnk.link_type == 'lookup') {
            ret.value = child.Item(row[lnk.local_field], groupId);
            ret.key = lnk.child_code + '_' + lnk.local_field;
          }
        }
      });
    }

    if (!ret.value && groupId != undefined)
      this.GetRowsByGroup({ key: groupId });

    return ret;
  }

  get FirstLink(): any {
    if (this.Links() == null) return null;
    return this.Links()[0];
  }

  public ChildTable(childTableCode?: string): any {
    let childCode: string = '';
    if (childTableCode == undefined) {
      // if undefined, search only the children table collection because
      // this only means that the request was intended to retreive
      // record(s) directly under the current table
      for (var key in this.childrenTable) {
        childCode = key;
        break;
      }
    } else {
      childCode = childTableCode;
    }
    return this.tables[childCode];
  }

  GetColumnIndices(cols: Array<ColumnInfo>): string {
    let ret: string = '';
    cols.forEach((c: ColumnInfo) => {
      ret +=
        (ret.length != 0 ? '`' : '') +
        this.columns.findIndex((e) => {
          return e.name == c.name;
        });
    });
    return ret;
  }

  public childrenTable: any = null;
  public AddChildTable(childTable: any) {
    if (!this.childrenTable) this.childrenTable = {};
    let tableCode: string = childTable.tableCode;
    this.childrenTable[tableCode] = childTable;
  }

  //get http():HttpClient{
  //  return this.apiHttp;
  //}

  Add(rec?: any): any {
    if (rec == undefined) {
      // Create an empty row with temporary id
      rec = this.NewRow();
      rec._newId = Date.now(); // assign temporary
    } else {
      rec.isPending = false;
    }

    // check if key field values are still undefined, if so, assign a new id else remove newId
    let isNew: boolean = false;
    this.keyFields.forEach((col: ColumnInfo) => {
      if (rec[col.name] == undefined) isNew = true;
    });

    let keyField: string = this.keyName;

    if (isNew) {
      rec._newId = this.TempId;
      rec[keyField] = -rec._newId;
    } else {
      rec._newId = undefined;
    }

    // assign parent/current table of the new record
    rec.currentTable = this._derivedTable;
    rec._parentTable = this._derivedTable;

    // get unique key field name

    // get unique key value
    let key: number = rec[keyField];
    let existing: any = this.Item(rec[keyField]);

    if (existing) {
      // remove record from the rows collection before adding the new record
      // ??? what if update is the only intention and not totally replace the record?
      // Selected field values like the XTRA field might be necessary to retain
      // as they serve as additional information that might not be available in the new record
      this.Purge(key, true);
    }

    this._derivedRecords.push(rec);
    this.__Item['r_' + String(key)] = rec;

    return rec;
  }

  // private _pendingRequests: Array<string> = [];
  // private _historicalRequests: Array<string> = [];

  // public get History(): Array<string> {
  //   return this._historicalRequests;
  // }
  // public get Pending(): Array<string> {
  //   return this._pendingRequests;
  // }

  // IsWithHistory(url: string): boolean {
  //   let idx: number = this._historicalRequests.indexOf(url);
  //   return idx != -1;
  // }

  // AddHistoryLog(url: string) {
  //   let idx: number = this._historicalRequests.indexOf(url);
  //   if (idx == -1) this._historicalRequests.push(url);
  // }

  // ClearHistoryLog(url: string) {
  //   let idx: number = this._historicalRequests.indexOf(url);
  //   if (idx != -1) this._historicalRequests.splice(idx, 1);
  // }

  // IsWithPending(url: string): boolean {
  //   let idx: number = this._pendingRequests.indexOf(url);
  //   return idx != -1;
  // }

  // ClearRequestFlag(url: string) {
  //   let idx: number = this._pendingRequests.indexOf(url);
  //   if (idx != -1) this._pendingRequests.splice(idx, 1);
  // }

  // AddRequestFlag(url: string) {
  //   let idx: number = this._pendingRequests.indexOf(url);
  //   if (idx == -1) this._pendingRequests.push(url);
  // }

  Save(): void {}

  Get(args?: {
    onSuccess?: Function;
    onError?: Function;
    key?: any;
    keyFields?: any;
    subsKey?: string;
    includedFields?: string;
  }): Subscription {
    // returns an array of datga
    //return this.http.get(this.tblUrl);
    //return []
    if (!args.subsKey) args.subsKey = this.apiCommon.newSubsKey;

    const hdrs = new HttpHeaders();
    hdrs.set('Content-Type', 'application/json; charset=utf-8');
    hdrs.set('Access-Control-Allow-Origin', '*');
    hdrs.set(
      'Access-Control-Allow-Origin',
      'Origin, X-Requested-With, Content-Type, Accept'
    );

    let prmKey: string = '';
    let prmKeyFields: string = '';

    if (args) {
      // key must have a final value of v0`v1`...`vN
      // values are separated by back-ticks

      if (args.key != undefined) {
        if (typeof args.key == 'object') {
          // contatenate all key values delimited by a back-tick
          args.key.forEach((k) => {
            prmKey += (prmKey.length != 0 ? '`' : '') + k;
          });
        } else {
          // assign key to prmKey
          prmKey = String(args.key);
        }
      }
      if (args.keyFields != undefined) {
        if (typeof args.keyFields == 'object') {
          // keyfield is an array of field names or indices of fielda
          args.keyFields.forEach((kf) => {
            let tempKeyIndex: string;
            // if (isNaN(kf)) {
            //   tempKeyIndex = String(
            //     this.columns.findIndex((c) => {
            //       return c.name == kf;
            //     })
            //   );
            // } else {
            //   tempKeyIndex = String(kf);
            // }
            // prmKeyFields +=
            //   (prmKeyFields.length == 0 ? '' : '`') + tempKeyIndex;
            prmKeyFields += (prmKeyFields.length == 0 ? '' : '`') + kf;
          });
        } else {
          //uprm_user_id, is numeric this is the index of the column,
          // otherwise this is the name of the column
          // if (isNaN(args.keyFields)) {
          //   // not a number, resolve column index
          //   //this.co.findIndex((e)=>{return e.name=="field3"});
          //   prmKeyFields = String(
          //     this.columns.findIndex((c) => {
          //       return c.name == args.keyFields;
          //     })
          //   );
          // } else {
          //   // numeric value, assign raw value to prmKeyFields
          //   prmKeyFields = String(args.keyFields);
          // }
          prmKeyFields = String(args.keyFields);
        }
      }
    }

    let url: string =
      this.tblUrl +
      (prmKey.length != 0
        ? '/' + prmKey + (prmKeyFields.length != 0 ? '/' + prmKeyFields : '')
        : '');

    if (args.includedFields)
      url +=
        (url.indexOf('?') == -1 ? '?' : '&') +
        ('includedFields=' + args.includedFields);

    // these two tests is important to preceed any alteration to the
    // url (eg. adding auto-generated parameters for each request)
    if (this.apiCommon.IsWithHistory(url)) return null;
    if (this.apiCommon.IsWithPending(url)) return null;

    this.apiCommon.AddRequestFlag(url);

    // url alteration begins here
    let urlParams: string = '';
    let rows: Array<any> = null;

    if (args.subsKey != undefined)
      urlParams = (url.indexOf('?') == -1 ? '?' : '&') + 'skey=' + args.subsKey;

    this.pendingRequest = true;

    let ret: Subscription = this.http.get<AppReturn>(url + urlParams).subscribe(
      (data: any) => {
        // recs will have the array of returned records if the
        // server-side return value is a single table object
        let retObj: any = null;
        let recs: Array<any> = data.recordsList;
        if (recs) {
          retObj = data;
        } else {
          // recs is null if data is an array of AppReturn
          // need to find data specific to the current table
          // using the tableCode property

          // iterate through the results array element where the returnType == 'table'
          // then call tableObj.ProcessRequestedRecords for each return object
          // this is to allow processing multi-recordset in a single request

          // filter only objects with returnType = 'table'
          let retTables: Array<any> = data.filter(
            (o) => o.returnType == 'table'
          );

          // loop through objects and call the local ProcessRequestedRecords method
          retTables.forEach((t) => {
            let tbl: any = this.tables[t.returnCode];

            if (tbl) {
              rows = tbl.ProcessRequestedRecords(t);
            } else;
          });
        }

        // call onSuccess parameter function if defined
        if (args)
          if (args.onSuccess != undefined) {
            const config = data.find((r) => r.returnType == 'config');
            if (config) data.shift();
            args.onSuccess({
              raw: data,
              processed: { data: rows, lookups: null },
              config: config,
            });
          }

        this.pendingRequest = false;

        // add request to history log. this log will be checked for subsequent requests
        // where calls for existing entries will be bypassed to improve performance efficiency
        this.apiCommon.AddHistoryLog(url);

        // this removes entry to collection if URL that is used to prevent same-request concurrency issues
        // request concurrency check is necessary to prevent duplicate records post-processing
        // action when similar multiple requests return back to the client.
        this.apiCommon.ClearRequestFlag(url);
      }, // end of success
      (error: any) => {
        // call onError parameter function if defined
        if (args) if (args.onError != undefined) args.onError(error);
        this.pendingRequest = false;
        this.apiCommon.ClearRequestFlag(url);
      }
    );

    if (args.subsKey != undefined && args.subsKey != null) {
      this.apiCommon.TblSubs[args.subsKey] = { subs: ret, when: Date.now };
    }
    return ret;
  }

  public ProcessRequestedRecords(retObj: any): Array<any> {
    if (!retObj) return [];

    let ret: Array<any> = [];

    // setup variables containing return data
    const returnDataParams = retObj.returnDataParams;
    const snapshot = !returnDataParams.snapshot
      ? false
      : returnDataParams.snapshot;

    let rel: Relation = null;

    if (returnDataParams) {
      // record last request params

      // let pageNumber:number = 0;
      // let pageSize:number = 0;

      // let pageBookmarkStart:number = 0;
      // let bookmarkEnd:number=0;
      // let recordCount:number = 0;
      // let totalRecords:number = 0;

      if (this.lastRequestDataParams.pageSize != undefined)
        if (
          this.lastRequestDataParams.pageSize &&
          !returnDataParams.pageSize &&
          returnDataParams.pageSize != undefined
        ) {
          // if (this.lastRequestDataParams.pageSize)
          // preserve previous values of page parameters if the new request
          // is not containing page parameters, preserve old values
          let {
            pageNumber,
            pageSize,
            totalPages,
            pageBookmarkStart,
            pageBookmarkEnd,
            recordCount,
            totalRecords,
          } = this.lastRequestDataParams;

          // console.log("this.lastRequestDataParams:",this.lastRequestDataParams);

          // replace new values with old paging parameter values
          returnDataParams.pageNumber = pageNumber;
          returnDataParams.pageSize = pageSize;
          returnDataParams.totalPages = totalPages;
          returnDataParams.recordCount = recordCount;
          returnDataParams.pageBookmarkStart = pageBookmarkStart;
          ``;
          returnDataParams.pageBookmarkEnd = pageBookmarkEnd;
          returnDataParams.totalRecords = totalRecords;
        }

      this.lastRequestDataParams = returnDataParams;

      this.lastRequestDataParams.totalServerSideProcessDuration =
        retObj.requestDuration;
      this.lastRequestDataParams.roundTripDuration = retObj.roundTripDuration;

      // get relation code from the raw returnDataParams
      const linkCode = returnDataParams.linkToParentCode;
      if (linkCode) {
        let parentTable = this.tables[linkCode];
        rel = parentTable.tableRelations[this.tableCode];
      }
    }

    let recs: any = retObj.recordsList;
    const fieldNames = retObj.fieldNames;
    if (recs) {
      // map fieldNames to dataColumns definition
      let dataColumns: Array<ColumnInfo> = this.DataColumns(fieldNames);

      // get parent link fieldName index
      const linkParentIdx = fieldNames.indexOf(
        this.apiCommon.FIELD_PARENT_LINK_ALIAS
      );
      const childFirst = fieldNames.indexOf(
        this.apiCommon.FIELD_CHILD_FIRST_ALIAS
      );
      const childCount = fieldNames.indexOf(
        this.apiCommon.FIELD_CHILD_COUNT_ALIAS
      );

      recs.forEach((e) => {
        // create new table row
        const row: any = this.NewRow();

        // assign request data/time stamp
        row._requestDate = new Date(retObj.requestDateTime);

        // assign column values
        let idx: number;

        for (idx = 0; idx < dataColumns.length; idx++) {
          let col: ColumnInfo = dataColumns[idx];

          if (col)
            // add column value to the new row when it is part of the columns definition of the table
            row[col.name] = e[idx];
          else {
            // add column value to xtra field property
            // XTRA fields are those requested ones that
            // that belong to other tables participating
            // in the FROM clause of the SQL statement.
            // These are normally used when displaying
            // equivalent descriptive text of a local
            // fields containing just the referenc id of
            // a record in a lookup table.

            // extra field name
            const xtraFieldName = fieldNames[idx];
            let valObj: any = {};
            valObj[xtraFieldName] = e[idx];
            row.XTRA = valObj;
          }
        }

        // push row to table rows collection only if the expected object is not a snapshot
        if (snapshot) {
          row.currentTable = this._derivedTable;
          row._parentTable = this._derivedTable;
        } else {
          this.Add(row);
        }

        ret.push(row); // append new row to return record array

        // set childFirst property of the row (!will become obsolete when new sql builder is implemented)
        if (childFirst != -1) row.childFirst = e[childFirst];

        // set childCount property of the row (!will become obsolete when new sql builder is implemented)
        if (childCount != -1) row.childCount = e[childCount];

        // will revisit this part when already working with the linked table features
        if (rel && linkParentIdx != -1) {
          // applicable to parent_table -> link_table -> child-table(collection) relation
          // if parent relation exists then Add new mappedRecord
          rel.AddMap(Number(e[linkParentIdx]), row[this.keyName], row);
        }
      });
    }

    return ret;
  }

  private _GetRowsByGroup: any = {}; // groups that were already requested previously

  /**
   *
   *       this.subs = this.ds.tblUserParams.Get({
        onSuccess:(data)=>{
          params  = this.ds.tblUserParams.rows.filter(e => {return e.uprm_user_id==r.user_id});
          this.subs.unsubscribe();
        },
        key:r.user_id,
        keyFields:this.ds.tblUserParams.groupIndices
      });
   *
   *
   */
  private _GetRowsByGroupSubs: Subscription = null;
  private _GroupRows: any = {};

  GetRowsByGroup(args: {
    key?: any;
    keyField?: string;
    onSuccess?: Function;
    onError?: Function;
    row?: any;
  }): Array<any> {
    let parKey: string;
    let tbl: any;

    let { key, keyField, onSuccess, onError, row } = args;

    if (typeof key == 'object') {
      // key supplied is a row object which is expected to contain
      // the key value to be passed as group key of records in the child table
      tbl = key.Table;
      if (tbl) {
        parKey = tbl.keyName;
        key = key[parKey];

        /*if (tbl.currentRow) {
          parKey = tbl.keyName;
          key = tbl.currentRow[parKey];
        } else {
          key = undefined;
          this.cl([this.tableCode + ": no current row",this.tableCode=="upln"])
        }*/
      } else {
        key = undefined;
      }
    }

    // define data group key that will be used for
    // identification in the memory cache
    let groupKey: string = '';

    if (key != undefined) {
      // check if group rows already defined in the table object and return it if it does
      groupKey = 'g' + key;
      if (this._GroupRows[groupKey]) return this._GroupRows[groupKey]; // this affects retreival of data
    }

    if (this.keyGroupFields.length == 0) return [];

    if (this._GroupRows[groupKey]) {
      // if group of records is/are already existing in the
      // cache, retrieve these records instead of resolfing them
      return this._GroupRows[groupKey]; // this affects retreival of data
    }

    // nov 19, 2019
    //let keyField:string = this.grpCol.name;
    if (keyField == undefined) keyField = this.grpCol.name;

    let subsKey: string = this.apiCommon.newSubsKey;

    // call Get method which executes requests from the server when
    // request has not been done before and no pending request already
    // made and simply waiting for the response
    this.Get({
      onSuccess: (e) => {
        this.apiCommon.UnSubscribe(e);
        if (onSuccess != undefined) onSuccess(e);
      },
      onError: (e) => {
        if (onError) onError(e);
      },
      subsKey: subsKey,
      key: key,
      keyFields: keyField,
    });
    let ret = this.GetRows().filter((e) => e[keyField] == key);

    if (ret != null) {
      if (ret.length != 0)
        if (!(groupKey in this._GroupRows)) this._GroupRows[groupKey] = ret;
    }
    return ret;
  }

  GetCachedRowById(key: number): any {
    return this.GetRows().find((r) => r[this.keyName] == key);
  }

  GetRowById(
    key: number,
    resolve?: Function,
    reject?: Function,
    always?: Function
  ): any {
    let keyField: string = this.keyName;
    let _newSubsKey: string = this.apiCommon.newSubsKey;

    let row: any = this.GetCachedRowById(key);
    let data: any = row;

    if (!row) {
      // execute request from the server

      this.Get({
        onSuccess: (e) => {
          data = e;
          this.apiCommon.UnSubscribe(e);
          if (resolve != undefined) resolve(e);
        },
        onError: (e) => {
          //if(onError)onError(e);
          if (reject != undefined) reject(e);
        },
        key: key,
        subsKey: _newSubsKey,
      });
    }
    if (always) always(data);
    return row;
  }

  // GetRowById(key:number):any{return null;}  // dummy just suppress errors
  GetRowById_Obsolete(key: number): any {
    let keyField: string = this.keyName;
    return this.GetRows().find((r) => r[keyField] == key);
  }

  SeekRecord(row: Array<any>): any {
    //this
    return this._derivedRecords.find((r) => {
      return row[0] == r[this.keyName];
    });
  }

  Post(rec?: any) {
    // if no argument is supplied for posting all updated/new/deleted
    // if a record is supplied, post only the supplied record
  }

  // redefined in tables.ts to return a new instance of the derived row instead of the base row object
  NewRow(): any {}

  // redefined in tables.ts to return an array of the derived rows instead of array base rows object
  GetRows(): Array<any> {
    // just an abstraction interface
    // will be overwritted in the actual table class which retuns table.rows array
    return [];
  }

  KeyColumns(prop: string, desc?: boolean): Array<ColumnInfo> {
    if (desc == undefined) desc = false;
    return this.columns
      .filter((e) => {
        return e[prop] != -1;
      })
      .sort((a, b) => {
        return a[prop] < b[prop]
          ? 1
          : desc
          ? b[prop] < a[prop]
            ? -1
            : 0
          : b[prop] > a[prop]
          ? -1
          : 0;
      });
  }

  DataColumns(fieldNames: Array<string>): Array<ColumnInfo> {
    // Navigates to the table columns definition and build a subset
    // of ColumnInfo which only contains columns with names included in
    // fieldNames string array parameter.
    let ret: Array<ColumnInfo> = [];
    fieldNames.forEach((f) => {
      // some columns are not exsiting in the columns collection
      // of the table and will be set to undefined
      ret.push(this.GetColumnInfo(f));
    });
    return ret;
  }

  GetColumnInfo(fieldName: string): ColumnInfo {
    return this.columns.find((c) => c.name == fieldName);
  }

  InitializeTable(): void {
    this.keyFields = this.KeyColumns('keyPosition');
    this.keyGroupFields = this.KeyColumns('groupPosition');
    this.keyUniqueFields = this.KeyColumns('uniquePosition');
    this.keySortFields = this.KeyColumns('sortPosition');
    this.keyDisplayFields = this.KeyColumns('displayPosition');
  }

  private _stampsAssigned: boolean = false;
  AssignStamps() {
    /*************************************************************************************
     * WARNING!: This method causes tons of memory leak when executed concurrently with
     * other asynchronous process. Must be called only on routines invoked by clicking
     * a button (eg. on save, post, create actions)
     *************************************************************************************/
    if (this._stampsAssigned) return;
    // assign column stamp date and user stamp fields
    const tableColumns = this.columns;

    // get all columns classified as either a date or user stamp
    const stamps = tableColumns.filter(
      (c) => c.isFieldDateStamp || c.isFieldUserStamp
    );
    if (stamps.length) {
      // loop through stamp fields
      stamps.forEach((scol) => {
        // loop through data field(s) linked to the stamp field
        scol.StampLinkFields.forEach((fname) => {
          // const dataCol = this.columns.filter((c) => (c.name = fname));
          const col = tableColumns.find((c) => (c.name = fname));

          if (col) {
            // if data column is found, assign stamp column to its
            // UserStampColumn or DateStampColumn property

            console.log('\n******* LINKED DATA COLUMN ', col);

            // if (scol.isFieldDateStamp) col.DateStampColumn = scol;
            // else col.UserStampColumn = scol;
          } else {
            console.log(
              '\n******* DATA COLUMN linked to stamp field NOT FOUND'
            );
          }
        });
      });

      //   console.log("\nTable COLUMNS:" ,this.columns);
    }

    this._stampsAssigned = true;
  }

  get NewRows(): Array<any> {
    return this.GetRows()
      .filter((r) => {
        return r._newId != null && r._newId != undefined;
      })
      .sort((a, b) => {
        // sort in descending order
        return a._newId < b._newId ? 1 : b._newId < a._newId ? -1 : 0;
      });
  }

  get TempId(): number {
    let newRows: Array<any> = this.NewRows;
    if (newRows.length == 0) {
      // if no new record has already been created
      return 1;
    } else {
      //return newRows[newRows.length-1]["_newId"]+1;
      return newRows[0]['_newId'] + 1;
    }
  }

  GetRelation(relationCode: string): Relation {
    if (!this.tableRelations) return null;
    let rel: Relation = this.tableRelations.find((r) => r.code == relationCode);
    if (!rel) return null;
    return rel;
  }

  private _ParentDetailRelation: Relation;
  public get ParentDetailRelation() {
    if (this._ParentDetailRelation == undefined)
      this._ParentDetailRelation = this.tableRelations.find(
        (r) => r.parentDetail
      );
    return this._ParentDetailRelation;
  }

  // ********************* configuration properties *********************
  private _PropsCache: {} = {};
  get RevisionField(): ColumnInfo {
    return this.GetPropColumn('isRevision');
  }
  get AssetField(): ColumnInfo {
    return this.GetPropColumn('isAssetField');
  }

  get ReferenceField(): ColumnInfo {
    const col = this.GetPropColumn('isReference');

    // return found colum only if format property is also available
    if (col) if (col.format) return col;

    return null;
  }

  get DeletedField(): ColumnInfo {
    // numeric field which indicates that the record is deleted when the value is 1,
    // active when value is null or not 1
    return this.GetPropColumn('isDeletedField');
  }

  get DeletedStampField(): ColumnInfo {
    return this.GetPropColumn('isDeletedStamp');
  }
  get DeletedByStampField(): ColumnInfo {
    return this.GetPropColumn('isDeletedByStamp');
  }

  get CreatedStampField(): ColumnInfo {
    return this.GetPropColumn('isCreatedStamp');
  }
  get CreatedByStampField(): ColumnInfo {
    return this.GetPropColumn('isCreatedByStamp');
  }

  get UpdatedStampField(): ColumnInfo {
    return this.GetPropColumn('isUpdatedStamp');
  }
  get UpdatedByStampField(): ColumnInfo {
    return this.GetPropColumn('isUpdatedByStamp');
  }
  get LookupCodeField(): ColumnInfo {
    return this.GetPropColumn('isLookupCode');
  }
  get LookupTextField(): ColumnInfo {
    return this.GetPropColumn('isLookupText');
  }
  get LookupGroupField(): ColumnInfo {
    return this.GetPropColumn('isLookupGroup');
  }
  get LookupForeField(): ColumnInfo {
    return this.GetPropColumn('isLookupFore');
  }
  get LookupBackField(): ColumnInfo {
    return this.GetPropColumn('isLookupBack');
  }
  get DataGroup(): ColumnInfo {
    return this.GetPropColumn('isDataGroup');
  }

  get TableConfig(): IRegularTableConfig {
    let ret: IRegularTableConfig = {};
    const cfg = this.clientConfig;

    ret.roles = cfg.roles;
    ret.keyField = cfg.keyField;
    ret.assetField = cfg.assetField;

    ret.createdDateStamp = cfg.createdDateStamp;
    ret.createdByStamp = cfg.createdByStamp;

    ret.deletedDateStamp = cfg.deletedDateStamp;
    ret.deletedByStamp = cfg.deletedByStamp;
    ret.deletedFlagField = cfg.deletedFlagField;
    ret.gridColumns = cfg.gridColumns;
    ret.defaultValues = cfg.defaultValues;
    ret.treeRecolorOnUpdate = cfg.treeRecolorOnUpdate;

    ret.recordTypeField = cfg.recordTypeField;
    ret.referenceField = cfg.referenceField;
    ret.revisionField = cfg.revisionField;

    // specific extras
    ret.extra = cfg.extra;

    // global extras
    ret.extraJoins = cfg.extraJoins;
    ret.extraFields = cfg.extraFields;

    ret.Table = this;
    ret.subTable = cfg.subTable;

    ret.refFilesLinkPathId = cfg.refFilesLinkPathId;

    return ret;
  }

  private _recordTypeOptions: Array<any>;
  get recordTypeOptions(): Array<any> {
    if (this._recordTypeOptions == undefined) {
      this._recordTypeOptions = [];
      let tmpArr: Array<any> = [];

      const cfg: IRegularTableConfig = this.TableConfig;

      for (let key in cfg.subTable) {
        const tmp = cfg.subTable[key];
        tmpArr.push({
          key: key,
          group: tmp.group,
          tableCode: tmp.tableCode,
          code: tmp.code,
          name: tmp.name,
          icon: tmp.icon,
          extraJoins: tmp.extraJoins,
          extraFields: tmp.extraFields,
          fieldMapping: tmp.fieldMapping,
        });
      }
      this._recordTypeOptions = tmpArr;
    }
    return this._recordTypeOptions;
  }

  get TableLookupConfig(): ILookupTableConfig {
    let ret: ILookupTableConfig = {};
    const cfg = this.clientConfig;
    ret.keyField = cfg.keyField;
    ret.lookupCodeField = cfg.lookupCode;
    ret.lookupTextField = cfg.lookupText;
    ret.lookupTextAsValue = cfg.lookupTextAsValue;
    ret.lookupGroupField = cfg.lookupGroup;
    return ret;
  }

  private GetPropColumn(propName: string): ColumnInfo {
    if (this._PropsCache[propName] == undefined)
      this._PropsCache[propName] = this.columns.find((c) => c[propName]);
    return this._PropsCache[propName];
  }

  GetLinkedRows(childTableCode: string, parentId: number): Array<any> {
    let rel: Relation = this.GetRelation(childTableCode);
    if (!rel) return [];
    let row: any = this.GetRowById(parentId);
    if (!row) return [];
    return rel.GetLinkedRows(parentId);
  }

  LookupText(
    value: number,
    displayField: string,
    groupValue?: number,
    groupField?: string,
    notFoundDislay?: string
  ): any {
    if (!this.GetCachedRowById(value)) {
      if (this.pendingRequest) return 'Searching...';

      if (groupValue != undefined) {
        let col: ColumnInfo;
        if (groupField != undefined) {
          col = this.GetColumnInfo(groupField);
        } else {
          col = this.grpCol;
        }
        if (col) {
          this.GetRowsByGroup({ key: groupValue, keyField: col.name });
        }
      }
    }
    const row = this.GetRowById(value);
    if (row) {
      const dispValue = row[displayField];
      return dispValue;
      //if()
    } else {
      return notFoundDislay ? notFoundDislay : 'Unknown';
    }
    //return row ? row[displayField] : (notFoundDislay ? notFoundDislay : 'Unknown');
  }
}

export class Relation {
  constructor(
    public code: string,
    public type: string,
    public table: any,
    public tableChild,
    public localField?: string,
    public foreignField?: string,
    public parentDetail?: boolean
  ) {
    if (localField == undefined) localField = '';
    if (foreignField == undefined) foreignField = '';
    if (parentDetail == undefined) parentDetail = false;
  }

  // if a linked type relation, this will contain the collection
  // of parentId's(par) and childId's(chi)
  public linkMapping = [];

  AddMap(parentId: number, childId: number, childRow?: any) {
    // find if existing
    if (!this.linkMapping.find((e) => e.par == parentId && e.chi == childId)) {
      this.linkMapping.push({ par: parentId, chi: childId, row: childRow });

      // add option to directly post record to the database...
    }
  }

  GetLinkedRows(parentId: number): Array<any> {
    if (this.linkMapping.length == 0) return [];
    let ret: Array<any> = this.linkMapping.filter((e) => e.par == parentId);
    let retVal: Array<any> = [];
    ret.forEach((e) => {
      retVal.push(e.row);
    });
    return retVal;
  }

  RemoveLinkedRows(parentId?: number, childId?: number) {
    if (this.linkMapping.length == 0) return;
    let lnk: any;

    if (parentId != undefined && childId != undefined) {
      // remove specific map
      // this.linkMapping.indexOf()
      lnk = this.linkMapping.find((e) => e.par == parentId && e.chi == childId);
    } else if (parentId != undefined) {
      // remove all maps with par=parentId
    } else if (childId != undefined) {
      // remove all maps with chi=childId
    } else {
      // remove all maps. DANGER!
    }
  }
}
