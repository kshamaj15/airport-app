import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private dataServiceService: DataServiceService){ }

  dataList: any;
  title: String = 'laanc';

  ngOnInit() {
    this.dataServiceService.getJsonData().subscribe(res => {
      this.dataList = res;
    });
  }
}
