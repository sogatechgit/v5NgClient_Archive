## Dependencies
- ### Bootstrap
  `Installation: npm install bootstrap[@version] --save`<br/>
  `Example: npm install bootstrap@4.5.2 --save`
   `Setup:`
    
    1. Edit angular.json file and add an entries to the build options styles array 
       - `node_modules/bootstrap/scss/bootstrap.scss`
- ### Fontawesome (free)
  `Installation: npm install --save @fortawesome/fontawesome-free`

  `Setup:`
    
    1. Edit angular.json file and add an entries to the build options styles array 
       - `node_modules/@fortawesome/fontawesome-free/css/fontawesome.css`
       - `node_modules/@fortawesome/fontawesome-free/css/regular.css`
       - `node_modules/@fortawesome/fontawesome-free/css/solid.css`
       - `node_modules/@fortawesome/fontawesome-free/css/brands.css`

- ### Angular Material
  `Installation:`
    
    1. Install Angular Material package `ng add @angular/material` 
    2. Install momentjs and MatMomentDateModule `npm install moment @angular/material-moment-adapter --save` 

- ### Enable json file import
  Edit `tsconfig.json (tsconfig.app.json in NG10)` and set `compilerOptions/resolveJsonModule = true`.
    
- ### Change Builder Port
  Edit `angular.json/serve/builder/options/port=4802`

- ### Valid Angular 9 not valid in Angular 10
  1. Extending class as base component of another class must use the proper @Component decorator and set as abstract class.<br/>

      `From (valid in Angular 9):`
      ``` typescript
        import { AppFormAComponent } from './../../api/cmp/app-form-a/app-form-a.component';
        import { AnomalyComponent } from './anomaly.component';
        import { Inject, ViewChild } from '@angular/core';

        export class AnomalyCommon {
          // declaration of details form inserted on each module subform
          // instance of the form must have #detailForm identifier


          @ViewChild('detailForm') detailForm: AppFormAComponent;

          constructor(@Inject(AnomalyComponent) public module: AnomalyComponent) {}

          ngOnInit(): void {
          }
          ngAfterViewInit(){
            // Call scatter after rendering sub form component inside the tab pages
            if(this.detailForm) {
              this.detailForm.Scatter();
              this.module.mainFormCollection.push(this.detailForm);
            }
          }
        }

      ```


      `To (valid in Angular 10):`
      ``` typescript
        import { AppFormAComponent } from './../../api/cmp/app-form-a/app-form-a.component';
        import { AnomalyComponent } from './anomaly.component';
        import { Inject, ViewChild, Component } from '@angular/core';

        @Component({
          template: ''
        })
        export abstract class AnomalyCommon {
          // declaration of details form inserted on each module subform
          // instance of the form must have #detailForm identifier


          @ViewChild('detailForm') detailForm: AppFormAComponent;

          constructor(@Inject(AnomalyComponent) public module: AnomalyComponent) {}

          ngOnInit(): void {
          }
          ngAfterViewInit(){
            // Call scatter after rendering sub form component inside the tab pages
            if(this.detailForm) {
              this.detailForm.Scatter();
              this.module.mainFormCollection.push(this.detailForm);
            }
          }
        }

      ```
## Data Migration
- ### Table Structure Change
  - IMSA_TBL_ARC_ANOM_MAIN
    1. Added unique numeric key field ANA_ID
    1. Added stamp fields ANA_ARCHIVE_REASON, ANA_ARCHIVE_DATE and ANA_ARCHIVE_BY
    1. Created group index on AN_ID
    1. Possibly resolving lookup key code to store text value instead or both. This is to remove dependencies.

## Project Configuration
- ### Server-Side Add-On Dependencies
  - NuGet DotNetZip - Response compression tool
  - NuGet Newtonsoft.json - JObject, JPropery, JArray support
  - NuGet Cors - [Microsoft.AspNet.WebApi.Cors](https://www.nuget.org/packages/Microsoft.AspNet.WebApi.Cors) to enable Cross-Origin Resource Sharing in ASP.NET API. Required to be allow different domain to be registered and perform Get/Post request.

## Custom Components
### DataGridComponent
### DataGridBComponent
### AppFormAComponent
### DataGridB-Based Module Component
### AppFormA-Based Details Component