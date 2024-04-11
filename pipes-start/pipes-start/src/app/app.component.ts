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
    this.httpService.featchUsers().subscribe(
      users => {
        this.users = users;
        console.log(users);
      }
    )
  }

  constructor(private httpService: HttpService) { }

  onPostUser(user: { name: string, email: string, password: string, phone: string }) {
    this.httpService.postUser(user);
    this.fetchUsers();
  }

  fetchUsers() {
    this.httpService.featchUsers().subscribe(
      users => {
        console.log(users );
        
        this.users = users;
      }
    )
  }

  getUsers() {
    this.fetchUsers();
  }

  onDeleteAll(){
    console.log("entrou");
    
    this.httpService.deleteAllUser();
    this.fetchUsers()
  }
}
