import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  optionsList: any;
  constructor() { }

  ngOnInit(): void {
    this.optionsList = [{
      name: 'Kshama',
      key: '0'
    },{
      name: 'Jisi',
      key: '0'
    },{
      name: 'Ankit',
      key: '0'
    },{
      name: 'Gumgun',
      key: '0'
    }]
  }

  getSelectedItem(e): void {
    console.log(e);
  }

}
