import { TestDirective } from './../appDirectives/test.directive';
import { Component, OnInit, ContentChild, ElementRef, AfterContentInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-sub-child1',
  templateUrl: './view-sub-child1.component.html',
  styleUrls: ['./view-sub-child1.component.css']
})
export class ViewSubChild1Component implements OnInit, AfterContentInit {
  @ContentChild('childCon') childparagraph: ElementRef
  @ViewChild(TestDirective)myDir:TestDirective
  constructor(private renderer:Renderer2) { }

  ngOnInit() {
    console.log(this.childparagraph)
  }

  ngAfterContentInit() {
   this.renderer.setStyle(this.childparagraph.nativeElement, 'color', 'red')
    
  }

  onClickME(){
    var text =this.renderer.createText('this.is my text')
    this.renderer.appendChild(this.childparagraph.nativeElement, text)
  }

  changeColor(color){
  this.myDir.changeBg(color)
  }

}
