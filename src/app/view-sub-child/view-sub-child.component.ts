import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-sub-child',
  templateUrl: './view-sub-child.component.html',
  styleUrls: ['./view-sub-child.component.css']
})
export class ViewSubChildComponent implements OnInit {
  name:string="xxxxxxx";
  constructor() { }

  ngOnInit() {
  }

  onClickMe(){
    alert(this.name)
  }

}
