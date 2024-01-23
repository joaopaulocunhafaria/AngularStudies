import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor(private userService: UserServiceService){}
 
  

  users:string[]=this.userService.inactiveUsers;
  
  onSetToActive(index:number){
    this.userService.setToActive(index);
  }
}
