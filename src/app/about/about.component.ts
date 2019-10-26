import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 value:string;
 isValid:boolean= true
  constructor() { }

  ngOnInit() {
  }

  onDisplay(name){
    console.log(name.value)
    this.value=name.value
  }

  onDestroy(){
    this.isValid=false
  }

}
