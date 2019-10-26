import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-slice',
  templateUrl: './push-slice.component.html',
  styleUrls: ['./push-slice.component.css']
})
export class PushSliceComponent implements OnInit {
  products=[];
  constructor() { }

  ngOnInit() {
  }

  onAdd(event){
    console.log(event)
    console.log(event.value)
    this.products.push({name:event.value})
    event.value=""
  }

  onDelete(i){
    this.products.splice(i,1)
  }

  onAllDelete(){
    this.products.splice(this.products.length-1)
  }





}
