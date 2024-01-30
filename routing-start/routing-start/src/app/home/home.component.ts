import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router, private auth:AuthService) { }

  ngOnInit() {
     
  }

  loadEditServer(id : number){
    this.route.navigate(['servers',id,'edit'], {queryParams:{allowEdit:4}, fragment:"loading"})
  }

  onLogIn(){
    this.auth.logIn()
  }

  onLogOut(){

    this.auth.logOut()
  }
}
