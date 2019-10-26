import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {
isClass=false
isStyle="15px"
isActive=false;
mltclasses={
  class1:true,
  class2:true,
  class3:true,
}

mltStyle={
  'background':'red',
  'border':'10px solid green'
}
  constructor() { }

  ngOnInit() {
  }

}
