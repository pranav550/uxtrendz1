import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
name = "pranav"
isDisabled=false
isHidden=false
appStatus=true;
status1="online"
status2="offLine"
  constructor() { }

  ngOnInit() {
  }

}
