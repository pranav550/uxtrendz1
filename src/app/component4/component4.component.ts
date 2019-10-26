import { UtilityService } from './../service/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
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
  
    this.service.userName.next(name.value)
    this.userName=name.value
    name.value=""
    
  }
}
