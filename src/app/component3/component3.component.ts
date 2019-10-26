import { UtilityService } from './../service/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
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
    name.value=""
  }

}
