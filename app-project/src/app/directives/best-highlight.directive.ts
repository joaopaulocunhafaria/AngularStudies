import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBestHighlight]'
})
export class BestHighlightDirective implements OnInit {
   
  @HostBinding("style.backgroundColor") backgrounColor :string;
  
  constructor(private elRef: ElementRef, private render: Renderer2) { }


  ngOnInit(): void {
    //   this.render.setStyle(this.elRef.nativeElement, "color ", "green")
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, "background-color", "green")
    this.backgrounColor="green"
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, "background-color", "transparent")
    this.backgrounColor="transparent"
  }

}
