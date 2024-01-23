import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent{


   constructor(private userService: UserServiceService){}


   users:string[]=this.userService.activeUsers;
  
   onSetToInactive(index:number){
    this.userService.setToInactive(index);
   }
}
