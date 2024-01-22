import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBestHighlight]'
})
export class BestHighlightDirective implements OnInit {
   
  @Input( ) defaultColor:string="transparent"

  @Input( ) highlightColor:string="blue"

  @HostBinding("style.backgroundColor") backgrounColor :string=this.defaultColor;
  
  constructor(private elRef: ElementRef, private render: Renderer2) { }


  ngOnInit(): void {
    //   this.render.setStyle(this.elRef.nativeElement, "color ", "green")
    this.backgrounColor=this.defaultColor
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, "background-color", "green")
    this.backgrounColor=this.highlightColor
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, "background-color", "transparent")
    this.backgrounColor=this.defaultColor
  }

}
