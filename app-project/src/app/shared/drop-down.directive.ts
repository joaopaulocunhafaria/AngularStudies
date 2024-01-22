import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  @HostBinding("class.open") isOpen: boolean = false;



  @HostListener("click") onClick(eventData: Event) {
    this.isOpen = !this.isOpen

  }

  constructor() { }

}
