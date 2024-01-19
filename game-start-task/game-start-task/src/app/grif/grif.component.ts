import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grif',
  templateUrl: './grif.component.html',
  styleUrl: './grif.component.css'
})
export class GrifComponent {

   @Input() num:number;

}
