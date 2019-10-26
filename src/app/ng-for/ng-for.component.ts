import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
products:any=[
  {img:"../../assets/laptop.jpg",name:"Laptop", id:"1", price:1000},
  {img:"../../assets/tv.jpg",name:"TV", id:"2", price:1000},
  {img:"../../assets/washingmachine.jpg",name:"WashingMAchine", id:"3", price:1000},
  {img:"../../assets/mobile.jpg",name:"Mobile", id:"4", price:1000},
]
  constructor() { }

  ngOnInit() {
  }

}
