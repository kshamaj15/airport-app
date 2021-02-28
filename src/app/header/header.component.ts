import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  optionsList: any;
  selectedFacility: String = 'select';
  constructor() { }

  ngOnInit(): void {
    this.optionsList = [{
      name: 'TVC - cherry capital',
      key: '0'
    },{
      name: 'TVF - theids river falls',
      key: '0'
    },{
      name: 'TVL - Lane Tahoe',
      key: '0'
    },{
      name: 'BUF - Buffalo Niagara Intl',
      key: '0'
    },{
      name: 'SFO - san francisco Intl',
      key: '0'
    }]
  }

  getSelectedItem(e): void {
    this.selectedFacility = e;
  }

}
