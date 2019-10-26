import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewInit, AfterViewChecked, OnDestroy {
 @Input() myValue: string="pranav"
  constructor() { 
    console.log("constructor called")
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges called")
    console.log(changes.myValue.previousValue)
    console.log(changes.myValue.currentValue)
    // console.log(changes.previousValue)
    // console.log(changes.currentValue)
  }

  ngOnInit() {
    console.log("ngOninit called")
  }

  ngDoCheck(){
    console.log("ngDoCheck called")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentinit called")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContent checked")
  }

  ngAfterViewInit(){
    console.log("ngAfter View Init")
  }

  ngAfterViewChecked(){
    console.log("ngAfter View Checked")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy Called")
  }



 

}
