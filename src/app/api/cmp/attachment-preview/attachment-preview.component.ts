import { HttpClient } from '@angular/common/http';
import { AppDataset } from './../../../svc/app-dataset.service';
import { AppMainServiceService } from './../../../svc/app-main-service.service';
import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-attachment-preview',
  templateUrl: './attachment-preview.component.html',
  styleUrls: ['./attachment-preview.component.scss'],
})
export class AttachmentPreviewComponent implements OnInit, AfterViewInit {
  @Output() openPreview: EventEmitter<any> = new EventEmitter();
  @Input() refernceId: number;
  @Input() rootUrl: string;
  @Input() width: number;

  @Input() iconFontSize: number =75;

  public data: any;

  private fileStatus: any = {};

  private _url: string;
  @Input() set url(value: string) {
    // this.openPreview.observers.length
    // http://soga-alv/ngarbi/RefFiles/Attachments/REF_FILES/AN/20191230_175134.jpg
    this._url = this.urlDomain + '/' + value;

    this._isPhoto = this.CheckIfPhoto(this._url);
    if (!this._isPhoto) this._isVideo = this.CheckIfVideo(this._url);
    else this._isVideo = false;

    if (!this.isVideo && !this.isPhoto) {
      // console.log('Ref is a neither a photo nor a video!');
      this._fileExists = false;
      return;
    }

    const staObj = this.fileStatus[this.urlKey];
    if (!staObj) {
      // get status
      const fd = new FormData();
      fd.append('path', value);
      const subs = this.http.post(this.urlFileStatus, fd).subscribe(
        (res: any) => {
          console.log('File check result: ', res);
          this.fileStatus[this.urlKey] = res;
          this._fileExists = res.exists;
        },
        (err) => {
          console.log('Error file check result: ', err);
        },
        () => {
          subs.unsubscribe();
        }
      );
    } else {
      console.log('From Cached Status: ', staObj, this._url);
      this._fileExists = staObj.exists;
    }

    if (this._isVideo && this._fileExists) {
      //this._fileExists = false;
      this._isLoading = true;
      setTimeout(() => {
        //this._fileExists  = true;
        this._isLoading = false;
      }, 0);
    }
  }

  private _fileExists: boolean = false;
  get fileExists(): boolean {
    return this._fileExists;
  }

  private _urlDomain: string;
  get urlDomain(): string {
    if (this._urlDomain) return this._urlDomain;
    this._urlDomain = this.ds.urlBase.replace(/\/api/gi, '');
    return this._urlDomain;
  }

  get urlFileStatus(): string {
    return this.ds.urlBase + '/FileUpload/FileStatus';
  }

  get urlKey(): string {
    return btoa(this.url);
  }

  get url(): string {
    return this._url;
  }

  constructor(public dataSource: AppMainServiceService) {}

  ngAfterViewInit() {
    console.log('AfterViewInit DATA: ', this.data);
  }
  ngOnInit(): void {
    if (this.data) {
      // this.url = this.data.url.url;
      this._currUrlObj = this.data.urlObj;

      if (this.data.iconFontSize) this.iconFontSize = this.data.iconFontSize;

      this.UpdateView();

      // if (this._currUrlObj) {
      //   console.log('this._currUrlObj.url : ', this._currUrlObj);
      //   return this._currUrlObj.url;
      // }
    }
  }

  ShowNext() {
    if (!this.isLast) {
      this._currUrlObj = this.data.urlObjs[this.currIdx + 1];
      this.UpdateView();
    }
  }
  ShowPrev() {
    if (!this.isFirst) {
      this._currUrlObj = this.data.urlObjs[this.currIdx - 1];
      this.UpdateView();
    }
  }

  OpenPreview(){
    this.openPreview.emit(this)
  }

  get currIdx(): number {
    const objs: Array<any> = this.data.urlObjs;
    const obj = this.currUrlObj;
    const idx = objs.findIndex((url) => url.key == obj.key);
    return idx;
  }

  get isLast(): boolean {
    return this.currIdx == this.data.urlObjs.length - 1;
  }
  get isFirst(): boolean {
    return this.currIdx == 0;
  }

  UpdateView() {
    if (!this.currUrlObj) return;
    this.data.title = this.currUrlObj.title;
    this.url = this.currUrlObj.url;
  }

  private _currUrlObj: any;
  get currUrlObj(): any {
    // if(this._currUrlObj)
    return this._currUrlObj;
  }

  get ds(): AppDataset {
    return this.dataSource.ActiveSource.appDataset;
  }

  get http(): HttpClient {
    return this.dataSource.http;
  }

  get isOpenPreview(): boolean {
    if (!this.data) return false;
  }

  CheckIfPhoto(url: string): boolean {
    const urlArr = url.toLowerCase().split('.');
    if (urlArr.length < 2) return false;

    const ext = urlArr[urlArr.length - 1];

    const validImage = ['jpg', 'bmp', 'png', 'jpeg', 'gif'];

    return validImage.indexOf(ext) != -1;
  }

  CheckIfVideo(url: string): boolean {
    const urlArr = url.toLowerCase().split('.');
    if (urlArr.length < 2) return false;

    const ext = urlArr[urlArr.length - 1];

    const validVideo = ['mp4', 'mpeg', 'avi'];

    return validVideo.indexOf(ext) != -1;
  }

  ImageLoaded(e: any) {
    console.log('****** Image Loaded!: ', e);
  }

  private _querying: boolean = false;

  CheckFileStatus() {
    if (this._querying) return;
    this._querying = true;
  }

  private _isVideoError: boolean = false;
  get isVideoError(): boolean {
    return this._isVideoError;
  }

  get validUrl(): boolean {
    return this.url ? true : false;
  }

  private _isLoading: boolean = false;
  get isLoading(): boolean {
    return this._isLoading;
  }

  private _isVideo: boolean = false;
  get isVideo(): boolean {
    return this._isVideo;
    //return this.validUrl ? this.url.indexOf('.mp4') != -1 : false;
  }

  private _isPhoto: boolean = false;
  get isPhoto(): boolean {
    return this._isPhoto;
  }
}
