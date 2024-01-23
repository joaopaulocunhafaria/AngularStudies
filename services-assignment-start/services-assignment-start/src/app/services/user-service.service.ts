import { Injectable, OnInit } from '@angular/core';
import { CounterUsersService } from './counter-users.service';

@Injectable(  )
export class UserServiceService {

 

  activeUsers = ["Joao", "Elaine"];
  inactiveUsers = ["Tom", "Mateus"];
  
  setToActive(index:number) {
      this.activeUsers.push(this.inactiveUsers.at(index));
      this.inactiveUsers.splice(index,1);
   }
  
   setToInactive(index:number) { 
    this.inactiveUsers.push(this.activeUsers.at(index));
    this.activeUsers.splice(index,1)
  }



}
