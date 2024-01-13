import { Component } from '@angular/core';

@Component({

  selector: 'app-servers',//-> atribui a tag <app-server>
  //selector: '[app-servers]',-> atributo app-server <div  app-server>
  //selector:'.app-servers',-> class="app-server"
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {





   allowsNewServer = false;
   serverCreatStatus = "no server has been created";
   serverName:string= "No name yet";
   searchMessage="Type server name"
   userName:string=""
   servers = ["testServer"]

   private serverCounter:number=0;

   constructor(){
   
      setTimeout(() => {
        this.allowsNewServer=true;
      }, 2000);

   }

   onCreatServer(){
      this.servers.push(this.serverName)
     this.serverCounter++
     this.serverCreatStatus=`${this.serverCounter} server has been created. Last server created is `+this.serverName
   }

   onUpDateServerName(serverName: Event) {
    console.log(serverName)
    
    this.serverName=(<HTMLInputElement>serverName.target).value;
  }


  changeMessage() {
    this.searchMessage="";  
  }

  emptyName(): any {
   return  this.userName==""?true:false  
  }

  onClearUserName() {
    this.userName=""  
  }

  createdStatus(): boolean {
    return this.serverCreatStatus.includes("no")?false:true; 
   }  


   deleteServer() {
     this.serverCounter--;
     this.servers.pop()
    }
    
}
