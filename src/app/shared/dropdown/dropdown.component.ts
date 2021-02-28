import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() optionsList: any;
  @Input() selectedOption: any;
  @Input() placeholder: String;
  @Input() labelName: any;
  @Input() returnValue: any;

  @Output() getSelectedItem = new EventEmitter<string>();
  
  filterdOptionsList: any;

  constructor() { }

  ngOnInit(): void {
    this.filterdOptionsList = this.optionsList;
    console.log(this.filterdOptionsList)
  }

  filterOptions(query): void {
    this.filterdOptionsList = this.optionsList.filter(ele => {
      let name = ele[this.labelName].toLowerCase();
      return name.includes(query.toLowerCase());
    })
    console.log(this.filterdOptionsList)
  }

  selectOption(value): void{
    this.getSelectedItem.emit(value);
  }

}
