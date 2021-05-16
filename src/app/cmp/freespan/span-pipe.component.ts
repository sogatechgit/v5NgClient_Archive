import { Component, Input, OnInit } from '@angular/core';
import { QrySpansHeaderRow } from 'src/app/svc/app.tables';
import { FreespanComponent } from './freespan.component';

@Component({
  selector: 'app-span-pipe',
  templateUrl: './span-pipe.component.html',
  styleUrls: ['./span-pipe.component.scss']
})
export class SpanPipeComponent implements OnInit {

  @Input() campaignTitle: string = '';
  @Input() surveyId: number;

  private _spanComponent: FreespanComponent;
  @Input() set spanComponent(value: FreespanComponent) {
    this._spanComponent = value;
  }

  private _allEvents: Array<QrySpansHeaderRow>
  @Input() set allEvents(value: Array<QrySpansHeaderRow>) {

    // console.log("pipe allEvents! ...",value)

    this._allEvents = value;
    this._localEvents = value.filter(evt => evt.SP_SV == this.surveyId)

    //if(this._localEvents ? this._localEvents.length : false) console.log("### events: ", this.surveyId, this._localEvents)
  }

  get pxFactor(): number {
    return this.spanComponent ? this.spanComponent.pxFactor : -1;
  }

  private _localEvents: Array<QrySpansHeaderRow>
  get localEvents(): Array<QrySpansHeaderRow> {
    if (!this._localEvents) return [];
    return this._localEvents;
  }

  get firstEvent():QrySpansHeaderRow{
    if(this.localEvents.length==0) return null;
    this.localEvents[0];
  }


  get allEvents(): Array<QrySpansHeaderRow> {
    return this._allEvents;
  }

  get spanComponent(): FreespanComponent {
    return this._spanComponent;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
