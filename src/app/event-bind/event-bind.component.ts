import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {
idDispaly=false
msg=""
  constructor() { }

  ngOnInit() {
  }

 

  onAddInfo(event){
     this.msg=event.target.value
  }

  onAddCart(event){
    this.msg=event.value
 }

  onInputClick(event){
      console.log(event.target.value)
   // this.msg =
  }

}
