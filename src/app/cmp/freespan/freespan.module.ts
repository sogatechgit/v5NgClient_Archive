import { FreespanComponent } from './freespan.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIModule } from './../../api/api.module';
import { SpanBarComponent } from './span-bar.component';
import { SpanMarkComponent } from './span-mark.component';
import { SpanPipeComponent } from './span-pipe.component';

const declare = [FreespanComponent, SpanBarComponent, SpanMarkComponent, SpanPipeComponent];

@NgModule({
  declarations: declare,
  exports: declare,
  imports: [CommonModule, APIModule],
})
export class FreespanModule { }
