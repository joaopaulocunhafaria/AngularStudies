import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: {};


  ngOnInit(): void { 
    this.httpService.featchUsers();
  }

  constructor(private http: HttpClient, private httpService: HttpService) { }

  onPostUser(user: { name: string, email: string, password: string, phone: string }) {
    this.httpService.postUser(user);
  }

  fetchUsers() {
    this.users =  this.httpService.featchUsers();
    console.log(this.users);
    
  }

  getUsers() {
    this.fetchUsers();
  }
}
