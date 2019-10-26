import { ViewSubChildComponent } from './../view-sub-child/view-sub-child.component';
import { Component, OnInit, ViewChild, ElementRef,  AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild('box')box: ElementRef
  @ViewChild(ViewSubChildComponent)child:ViewSubChildComponent
  userName:string = "angular"
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.box)
    this.box.nativeElement.style.backgroundColor="yellow"
    this.box.nativeElement.classList="abc"
    this.box.nativeElement.innerHTML="React"

    console.log(this.child)
  }

  changeProperty(){
    this.child.name="Angular"
  }
  changeMethod(){
    this.child.onClickMe()
  }

}
