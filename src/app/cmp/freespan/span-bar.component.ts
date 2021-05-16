import { Component, Input, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { QrySpansHeaderRow } from 'src/app/svc/app.tables';
import { FreespanComponent } from './freespan.component';
import { SpanPipeComponent } from './span-pipe.component';

@Component({
  selector: 'app-span-bar',
  templateUrl: './span-bar.component.html',
  styleUrls: ['./span-bar.component.scss']
})
export class SpanBarComponent implements OnInit, AfterViewInit {

  constructor(private elRef: ElementRef) { }

  private _pipe: SpanPipeComponent;
  @Input() set pipe(value: SpanPipeComponent) {
    this._pipe = value;
    // console.log("Bar pipe: ", this._pipe);
  }
  get pipe() {
    return this._pipe;
  }

  private _event: QrySpansHeaderRow;
  @Input() set event(value: QrySpansHeaderRow) {
    this._event = value;
    // console.log("Bar Event: ", value, " elRef:", this.elRef);
  }

  get event(): QrySpansHeaderRow {
    return this._event;
  }

  get pxFactor(): number {
    return this.pipe.spanComponent.pxFactor;
  }


  get spanLabel(): string {
    return `${this.event.SP_HT}/${this.event.SP_LEN}`
  }

  get pxSpanLeft(): number {
    return (this.event.SP_KS * 1000.0 - this.pipe.spanComponent.kpStart) * this.pxFactor;
  }

  get pxSpanLength(): number {
    if (!this.event) return 0;
    if (!this.event.SP_LEN) return 0;
    return 1000 * (this.event.SP_KE - this.event.SP_KS) * this.pxFactor;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    // console.log("Bar Event: ", this.event)
    // setTimeout(() => {
    //   console.log("this.pipe.localEvents: ", this.pipe.localEvents)
    //   if (this.pipe) {
    //     if (this.pipe.localEvents.length) {
    //       console.log("First Event: ", this.pipe.localEvents[0])
    //     } else {
    //       console.log("Pipe localEvents do not exist!")
    //     }
    //   }

    // }, 2000)
    this.elRef.nativeElement.style.minWidth = `${this.pxSpanLength}px`;
    this.elRef.nativeElement.style.maxWidth = `${this.pxSpanLength}px`;
    this.elRef.nativeElement.style.left = `${this.pxSpanLeft}px`;

    // console.log(this.event, "SPAN LEFT: ", this.pxSpanLeft, ", this.pipe.spanComponent.kpStart: ", this.pipe.spanComponent.kpStart, this.event.SP_KS, this.pxFactor)

    // this.elRef.nativeElement.style.left = `${this.pxSpanLeft}px`;
    //this.elRef.nativeElement.style.width = `${this.pxSpanLength}px`;
    //pxSpanLeft
  }

}
