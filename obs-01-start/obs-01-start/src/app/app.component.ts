import { Component, OnInit } from '@angular/core';
import { userService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService:userService) {}

  itsActivated=false;


  ngOnInit() {
        this.userService.isActivated.subscribe(
          data=>this.itsActivated=data
        )
  }
}
