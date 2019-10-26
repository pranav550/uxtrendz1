import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
proSelected:boolean=false
proName:string;
newProduct:string;
isProduct:boolean= false;
newPlaceholder="xyz"
  constructor() { }

  ngOnInit() {
  }

  addProduct(val){
    this.proSelected= true
    console.log(val)
    this.proName=val
  }

  addCart(val){
    console.log(val)
    this.isProduct=true
    this.newProduct=val
  }

  onAddProduct(event){
    console.log(event)
    this.isProduct= true
   this.newProduct=event
  }

}
