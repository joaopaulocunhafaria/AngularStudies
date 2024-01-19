import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild("serverContent", { static: true }) serverContent: ElementRef;


  addServer(serverName) {

    if (this.serverContent.nativeElement.value != "" && serverName.value != "") {
      this.serverCreated.emit({
        serverName: serverName.value,
        serverContent: this.serverContent.nativeElement.value
      });
    }
  }

  addBlueprint(serverName) {
    console.log(this.serverContent)
    if (this.serverContent.nativeElement.value != "" && serverName.value != "") {
      this.blueprintCreated.emit({
        serverName: serverName.value,
        serverContent: this.serverContent.nativeElement.value
      })
    }
  }
}
