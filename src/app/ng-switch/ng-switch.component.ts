import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  selectedValue:string;
  constructor() { }

  ngOnInit() {
  }

  getProductValue(event){
    console.log(event.target.value)
    this.selectedValue=event.target.value
  }
  

}
