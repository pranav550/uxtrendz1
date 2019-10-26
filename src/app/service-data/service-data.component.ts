import { UtilityService } from './../service/utility.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {
  users:any=[];
  constructor(private service:UtilityService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.service.getData().subscribe(user=>{
    this.users=user
    })
  }

}
