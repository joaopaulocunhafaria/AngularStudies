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
  serverName: string = "No name yet";
  searchMessage = "Type server name"
  userName: string = ""
  servers = ["testServer"]
  displayMessage: string[] = ["Good is our love", "Jesus is our savior", "Mary full of bless", "Dont be afraid, cause I won the world"]
  counter: number = 0;
  counterArray: number[] = []
  showDisplay: boolean = false
  private serverCounter: number = 0;

  constructor() {

    setTimeout(() => {
      this.allowsNewServer = true;
    }, 2000);

  }

  onCreatServer() {
    this.servers.push(this.serverName)
    this.serverCounter++
    this.serverCreatStatus = `${this.serverCounter} server has been created. Last server created is ` + this.serverName
  }

  onUpDateServerName(serverName: Event) {
    console.log(serverName)

    this.serverName = (<HTMLInputElement>serverName.target).value;
  }


  changeMessage() {
    this.showDisplay = !this.showDisplay;

    this.searchMessage = "";
    this.counterArray.push(this.counterArray.length);

    this.counter++;
    if (this.counter === 3) {
      this.counter = 0;
    }
  }

  emptyName(): any {
    return this.userName == "" ? true : false
  }

  onClearUserName() {
    this.userName = ""
  }

  createdStatus(): boolean {
    return this.serverCreatStatus.includes("no") ? false : true;
  }


  deleteServer() {
    this.serverCounter--;
    this.servers.pop()
  }


  changeStyle(){
    return {
         backgroundColor: this.counterArray.length>=5?"blue":"white",
         color:this.counterArray.length>=5?"white":"black",

    }
  }


  IncreaseCounter() {
    this.counterArray.pop();  
  }
}
