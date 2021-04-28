import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-span-pipe',
  templateUrl: './span-pipe.component.html',
  styleUrls: ['./span-pipe.component.scss']
})
export class SpanPipeComponent implements OnInit {

  @Input() campaignTitle:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
