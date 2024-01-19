import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eveen',
  templateUrl: './eveen.component.html',
  styleUrl: './eveen.component.css'
})
export class EveenComponent {
   @Input()  numero:number;
}
