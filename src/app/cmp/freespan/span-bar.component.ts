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
    // console.log("Bar Event: ", value,", length:",this.pxSpanLeft, " elRef:", this.elRef);
  }

  get event(): QrySpansHeaderRow {
    return this._event;
  }

  get eventType(): number {
    if (!this.event) return -1;
    return this.event.SP_TP;
  }


  get isSpan(): boolean {
    // return false;
    return this.eventType == EVENT_TYPE.SPAN
  }
  get isStrake(): boolean {
    // return false;
    return this.eventType == EVENT_TYPE.STRAKE
  }

  get isStabilization(): boolean {
    // return false;
    return this.eventType == EVENT_TYPE.STABILIZATION
  }
  get isSeabed(): boolean {
    // return false;
    return this.eventType == EVENT_TYPE.SEABED
  }

  get isBerm(): boolean {
    // return false;
    return this.eventType == EVENT_TYPE.BERM
  }
  

  get pxFactor(): number {
    return this.pipe.spanComponent.pxFactor;
  }


  get spanLabel(): string {
    return `${this.event.SP_HT}/${this.event.SP_LEN}`
  }

  get isLeftOverflow(): boolean {
    return this.pxSpanLeft < 0;
  }

  get isRightOverflow(): boolean {
    return (this.pxSpanLeft + this.pxSpanLength) > this.pipe.spanComponent.pipeWidthPx;
  }


  get pxSpanLeft(): number {
    return (this.event.SP_KS * 1000.0 - this.pipe.spanComponent.kpStart) * this.pxFactor;
  }

  get pxSpanLeftFinal(): number {
    if (!this.isLeftOverflow) return this.pxSpanLeft + this.pipe.pxPipeLeftOffset;
    // return this.pipe.spanComponent.startKpPx;
    return this.pipe.pxPipeLeftOffset;
  }

  get pxSpanLength(): number {
    if (!this.event) return 0;

    const offset = 0.0005

    const pxLength = 1000 * ((this.event.SP_KE + offset) - this.event.SP_KS) * this.pxFactor;
    return !this.isLeftOverflow ? pxLength : (pxLength - Math.abs(this.pxSpanLeft));
  }

  get pxSpanLengthFinal(): number {
    // return this.pxSpanLength;
    // return 0.5;
    return (!this.isRightOverflow ? this.pxSpanLength : this.pxSpanLength - (this.pxSpanLeft + this.pxSpanLength - this.pipe.spanComponent.pipeWidthPx));
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

    if (this.eventType == EVENT_TYPE.SPAN || this.eventType == EVENT_TYPE.STRAKE) {
      this.elRef.nativeElement.style.minWidth = `${this.pxSpanLengthFinal}px`;
      this.elRef.nativeElement.style.maxWidth = `${this.pxSpanLengthFinal}px`;

    } else {
      this.elRef.nativeElement.style.minWidth = `0px`;
      this.elRef.nativeElement.style.maxWidth = `0px`;
    }
    // this.elRef.nativeElement.style.minWidth = `${this.pxSpanLength}px`;
    // this.elRef.nativeElement.style.maxWidth = `${this.pxSpanLength}px`;

    this.elRef.nativeElement.style.left = `${this.pxSpanLeftFinal}px`;
    // if(this.isSeabed){
    //   this.elRef.nativeElement.style.left = `${this.pxSpanLeftFinal}px`;
    // }else{
    //   this.elRef.nativeElement.style.left = `${this.pxSpanLeftFinal}px`;
    // }

    // console.log(this.event, "SPAN LEFT: ", this.pxSpanLeft, ", this.pipe.spanComponent.kpStart: ", this.pipe.spanComponent.kpStart, this.event.SP_KS, this.pxFactor)

    // this.elRef.nativeElement.style.left = `${this.pxSpanLeft}px`;
    //this.elRef.nativeElement.style.width = `${this.pxSpanLength}px`;
    //pxSpanLeft
  }

}

export enum EVENT_TYPE {
  SPAN = 25,
  BERM = 5,
  STRAKE = 1,
  STABILIZATION = 26,
  SEABED = 41
}