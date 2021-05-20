import { Component, OnInit } from '@angular/core';
import { AppDataset } from 'src/app/svc/app-dataset.service';
import { AppMainServiceService } from 'src/app/svc/app-main-service.service';

@Component({
  selector: 'app-survey-select',
  templateUrl: './survey-select.component.html',
  styleUrls: ['./survey-select.component.scss']
})
export class SurveySelectComponent implements OnInit {

  constructor(public dataSource: AppMainServiceService) { }

  public isReady:boolean = false;

  get ds():AppDataset{
    return this.dataSource.ActiveSource.appDataset;
  }

  ngOnInit(): void {
  }

}
