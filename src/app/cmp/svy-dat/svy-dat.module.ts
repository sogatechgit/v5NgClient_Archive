import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIModule } from './../../api/api.module';

import { SvyDatComponent } from './svy-dat.component';
import { SvyDatDetailsComponent } from './svy-dat-details.component';

const declare = [
    SvyDatComponent,
    SvyDatDetailsComponent
];

@NgModule({
  declarations: declare,
  imports: [CommonModule, APIModule],
  exports: declare,
})
export class SvyDatModule {}
