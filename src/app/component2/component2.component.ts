import { UtilityService } from './../service/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  userName:string
  constructor(private service:UtilityService) { }

  ngOnInit() {
    this.getData()
  }


  getData(){
    this.service.userName.subscribe(uname=>{
      this.userName=uname
      
    })
    
  }


  addSubject(name){
    console.log(name.value)
    this.service.userName.next(name.value)
    this.userName=name.value
    name.value=""
  }

}
