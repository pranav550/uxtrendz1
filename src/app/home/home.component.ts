import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products=["Laptop", "Mobile", "TV", "Washing Machine"]
isDisplay:boolean= true;
  constructor() { }

  ngOnInit() {
  }


}
