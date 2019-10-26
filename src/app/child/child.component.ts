import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() placeholderText:string= "abc"
@Input() productSelected:boolean=false
@Input() productName:string;
@Output() newProduct= new EventEmitter<any>()
@Input() isProduct:boolean= false;
  constructor() { }

  ngOnInit() {
  }

 @Output() addCart(val){
    console.log(val)
    this.isProduct=true
    this.newProduct.emit(val)
  }


}
