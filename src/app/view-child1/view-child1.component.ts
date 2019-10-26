import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child1',
  templateUrl: './view-child1.component.html',
  styleUrls: ['./view-child1.component.css']
})
export class ViewChild1Component implements OnInit, AfterViewInit {
name="Angular"
@ViewChild('box')box:ElementRef
  constructor( private renderer:Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor','red')
    this.renderer.setStyle(this.box.nativeElement,'color','white')
    this.renderer.addClass(this.box.nativeElement,'myclass')
    this.renderer.setAttribute(this.box.nativeElement,'title',"my name is pranav")
    
  }



}
