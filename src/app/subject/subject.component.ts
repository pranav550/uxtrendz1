import { UtilityService } from './../service/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  name
  constructor(private service:UtilityService) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.service.userName.subscribe(data=>{
      console.log(data)
      this.name = data
    })
  }

  addSubject(data){
    console.log(data.value)

  }

}
