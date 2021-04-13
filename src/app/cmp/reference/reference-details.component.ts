import { FormGroup } from '@angular/forms';
import { FileUploaderComponent } from './../../api/cmp/file-uploader/file-uploader.component';
import { Component, KeyValueDiffers, ViewChild } from '@angular/core';
import { DetailsCommon } from './../../cmp/details.common';

@Component({
  selector: 'app-reference-details',
  templateUrl: './reference-details.component.html',
  styleUrls: ['./reference-details.component.scss'],
})
export class ReferenceDetailsComponent extends DetailsCommon {
  @ViewChild('type') type: any;
  @ViewChild('path') path: any;
  @ViewChild('fileUploader') fileUploader: FileUploaderComponent;

  constructor(public differs: KeyValueDiffers) {
    super(differs);

    // this section will allow customized parameter settings for the details popup
    this.popHeight = 335;
    this.tabHeight = 247;
    // this.popButtons= []
    this.titleEdit = 'Edit Reference';
    this.titleNew = 'New Reference File';

    // set view configurations
  }

  // ngOnInit(): void {}

  modAfterViewInit() {
    console.log(
      'fileUploader: ',
      this.fileUploader,
      ' type:',
      this.type,
      ' path:',
      this.path,
      ', ExtraDetailsSettings:',
      this.ExtraDetailsSettings,
      ', AccessMode:',
      this.AccessMode,
      ', parentKeyValue:',
      this.parentKeyValue,
      // ', modulesInfo: ',this.data? this.data.moduleExchangeInfo : this.moduleExchangeInfo,
      // ', this.modulesInfo: ',this.moduleExchangeInfo
    );
  }

  FileSelected(event: any) {
    // onFileSelected(event.e)
    // console.log('RefDet: ', event, 'FileUploader:', this.DataSet.fileUploader);
    // if (this.DataSet.fileUploader)
    //   this.DataSet.fileUploader.onFileSelected(event.e);
    // else console.log('DS File uploader not found!');

    if (this.fileUploader) this.fileUploader.onFileSelected(event.e);
    else console.log('File uploader not found!');
  }

  PathChanged(event: any) {
    const { e, sender } = event;
    const item = sender ? sender.lookupItem : null;

    console.log('PathChanged: ', event, ', Item', item);
  }

  TypeChanged(event: any) {
    const { e, sender } = event;
    const item = sender ? sender.lookupItem : null;
    console.log(
      'TypeChanged: ',
      event,
      ', Item',
      item,
      ' isURL?:',
      this.isURLType
    );
  }

  AfterFormCreate(event: any) {
    const form: FormGroup = event.form;
    console.log(
      'AfterFormCreate this.ExtraDetailsSettings: ',
      this.ExtraDetailsSettings,
      ' PATH:',
      this.path,
      ' TYPE:',
      this.type
    );
    if (!form) return;
    if (this.ExtraDetailsSettings && this.AccessMode == 'add') {
      const pathKey = this.ExtraDetailsSettings.pathKey;
      console.log('AfterFormCreate form:', form, ', path key:', pathKey);
      if (pathKey > 0) form.get('RF_PATH').setValue(pathKey);
    }
  }

  get typeItem(): any {
    if (!this.type) return null;
    return this.type.lookupItem;
  }

  get pathItem(): any {
    if (!this.path) return null;
    return this.path.lookupItem;
  }

  get isURLType(): boolean {
    if (!this.typeItem) return false;
    if (this.typeItem.sw2 || this.typeItem.sw3) return true;
    return false;
  }

  get isValidPath(): boolean {
    if (!this.pathItem) return false;
    // probably validate actual path setting here
    if (this.pathItem.text && this.pathItem.settings) return true;
    return false;
  }

  get currentPath(): string {
    if (!this.pathItem) return '';
    return this.pathItem.settings;
  }

  get roPATH(): boolean {
    if (!this.typeItem) return true;
    if (this.isURLType) return true;

    return this.ExtraDetailsSettings
      ? this.ExtraDetailsSettings.pathKey
        ? this.ExtraDetailsSettings.pathKey
        : undefined
      : undefined;
    // return true;
  }

  get roFILENAME(): boolean {
    if (!this.typeItem) return true;

    if (this.isURLType) return false;

    return true;
  }

  get progress():number{
    if(!this.fileUploader) return undefined;
    if(this.fileUploader.forUpload0.files.length==0) return undefined;
    return parseInt(this.fileUploader.ProgressDisplaySingle);
  }
}
