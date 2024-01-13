import { Component } from "@angular/core";


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrl:'./server.component.css'
})

export class ServerComponent {

  private serverId : string = "11.09.07-678";
  private serverStatus: string = "online";


 constructor(){
   this.serverStatus=Math.random()>0.5?"online":"ofline";
 }

  getServerStatus(){
    return this.serverStatus;
  }


  getServerId(){
    return this.serverId;
  }

  getColor() {
    return this.serverStatus==="online"?"rgb(120, 233, 120)":"rgb(203, 105, 105)"
   }
     
}