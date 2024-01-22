import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBestHighlight]'
})
export class BestHighlightDirective implements OnInit{

  constructor(private elRef:ElementRef,private render:Renderer2) { }

  ngOnInit(): void {
    this.render.setStyle(this.elRef.nativeElement, "color ", "green")
  }

}
