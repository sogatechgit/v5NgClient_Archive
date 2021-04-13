import { IPopupButton } from '../cmp/details.popup';

export class AppCommonMethods {
  constructor() {}

  get productionMode(): boolean {
    return false;
  }

  /*********************** buttons definitions *******************************/
  btnCancelAccept: Array<IPopupButton> = [
    {
      label: 'Cancel',
      value: 'cancel',
      style: 'btn btn-secondary',
      icon: 'fa fa-ban text-danger',
    },
    {
      label: 'Accept',
      value: 'accept',
      style: 'btn btn-warning',
      icon: 'far fa-thumbs-up text-success',
    },
  ];

  public MSSince(from: any): number {
    // returns milliseconds from the reference indormation
    if (typeof from == 'number') {
      // assume a millisecond from Jan 1970
      //return (msNow - from);
      return Date.now() - from;
    } else {
      // assume an earlier date
      let msNow: number = Date.now();
      return msNow - from;
    }
  }

  public _cl(...args: Array<any>) {
    // generic console log  method, shared accross components
    if (this.productionMode) return; // exit if already in production mode
    if (args.length == 0) return;
    let disp: any = args[args.length - 1];
    if (typeof disp == 'boolean') {
      if (disp) console.log(args);
    } else {
      console.log(args);
    }
  }

  public cl(args: Array<any>) {
    if (args.length == 0) return;
    let disp: any = args[args.length - 1];
    if (typeof disp == 'boolean') {
      if (disp) console.log(args);
    } else {
    }
  }

  public isNullVal(val: any) {
    return val + '' == 'null';
  }

  public get browserName(): string {
    const agent = window.navigator.userAgent.toLowerCase();
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }

  public isScrollable(el) {
    /*The scrollTop() method sets or returns the
        vertical scrollbar position for the selected elements*/

    var y1 = el.scrollTop;
    el.scrollTop += 1;
    var y2 = el.scrollTop;
    el.scrollTop -= 1;
    var y3 = el.scrollTop;
    el.scrollTop = y1;

    /*The scrollLeft() method returns the horizontal
        scrollbar position for the selected elements.*/

    var x1 = el.scrollLeft;
    el.scrollLeft += 1;
    var x2 = el.scrollLeft;
    el.scrollLeft -= 1;
    var x3 = el.scrollLeft;
    el.scrollLeft = x1;

    //returns true or false accordingly
    return {
      horizontallyScrollable: x1 !== x2 || x2 !== x3,
      verticallyScrollable: y1 !== y2 || y2 !== y3,
    };
  }

  public getDateMilliseconds(dt: Date, dt2?: Date): number {
    const ms1 =
      dt.getHours() * 60 * 60 * 1000 +
      dt.getMinutes() * 60 * 1000 +
      dt.getSeconds() * 1000 +
      dt.getMilliseconds();
    if (dt2 != undefined) {
      const ms2 =
        dt2.getHours() * 60 * 60 * 1000 +
        dt2.getMinutes() * 60 * 1000 +
        dt2.getSeconds() * 1000 +
        dt2.getMilliseconds();

      return ms2 - ms1;
    }

    return ms1;
  }

  GetPropertyStr(propsStr: string, propName: string): string {
    return this.GetProperty(propsStr.split(';'), propName);
  }

  GetProperty(propsArr: Array<string>, propName: string): string {
    const propKey = propName + '=';
    const prop = propsArr.find((p) => p.substr(0, propKey.length) == propKey);
    return prop ? prop.substr(propKey.length) : '';
  }

  padNum(num: number, length?: number): string {
    if (!length) length = 2;
    const ret = '0'.repeat(length) + num.toString();
    return ret.substr(ret.length - length, length);
  }

  isLeapYear(year?: number): boolean {
    if (!year) year = new Date().getFullYear();
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }

  MONTHS(year?: number): Array<any> {
    //const date = year ? new Date(`${year}-01-01`) : new Date();
    return [
      { name: 'January', end: 31 },
      {
        name: 'Febuary',
        end: this.isLeapYear(year ? year : new Date().getFullYear()) ? 29 : 28,
      },
      { name: 'March', end: 31 },
      { name: 'April', end: 30 },
      { name: 'May', end: 31 },
      { name: 'June', end: 30 },
      { name: 'July', end: 31 },
      { name: 'August', end: 31 },
      { name: 'September', end: 30 },
      { name: 'October', end: 31 },
      { name: 'November', end: 30 },
      { name: 'December', end: 31 },
    ];
  }

  dateToString(dt: Date, disp?: boolean): string {
    // const mo = this.padNum(dt.getMonth() + 1);
    const mo = disp? this.MONTHS()[dt.getMonth()].name : this.padNum(dt.getMonth() + 1);
    const sep = disp ? ', ' : 'T';

    return `${dt.getFullYear()}-${mo}-${this.padNum(
      dt.getDate()
    )}${sep}${this.padNum(dt.getHours())}:${this.padNum(
      dt.getMinutes()
    )}:${this.padNum(dt.getSeconds())}`;
  }

  // dateToString(dt: Date, disp?: boolean): string {
  //   if (!dt) return '';
  //   // return dt ? String(dt) : '-';

  //   return `${dt.getFullYear()}-${this.padNum(dt.getMonth() + 1)}-${this.padNum(
  //     dt.getDate()
  //   )}T${this.padNum(dt.getHours())}:${this.padNum(
  //     dt.getMinutes()
  //   )}:${this.padNum(dt.getSeconds())}`;
  // }

  public get dateStampString(): string {
    return this.dateToString(new Date());
  }

  public EmptyObject(obj: any): boolean {
    if (!obj) return true;
    for (let key in obj) {
      return false;
    }
    return true;
  }

  public get GUID(): string {
    // Public Domain/MIT
    let d = new Date().getTime(); //Timestamp
    let d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  } // end of GUID method
}
