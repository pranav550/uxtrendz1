import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {

  constructor(private el:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    
   // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','yellow')
  }

  changeBg(color:string){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',color)
  }

  // @HostListener('click') myClick(){
  //   alert('clicked')
  // }
  @HostListener('mouseover') myhover(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','lightgrey')
  }
  @HostListener('mouseout') myhoverout(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','white')
  }


}
