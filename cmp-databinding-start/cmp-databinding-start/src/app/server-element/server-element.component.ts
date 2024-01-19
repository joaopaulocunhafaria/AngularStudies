import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent  implements OnInit,OnChanges {
    @Input() element:{type:string,name:string,content:string}
 
    constructor(){
      console.log("Construtor chamado")
    }

    ngOnChanges(changes: SimpleChanges): void {
      
      console.log("ngOnChanges chamado")
      console.log(changes)
    }
    ngOnInit(){

      console.log("ngOnInit chamado")
    }
}
