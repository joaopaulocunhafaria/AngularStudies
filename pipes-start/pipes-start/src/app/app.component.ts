import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: {};
  ngOnInit(): void {
    this.fetchUsers();
  }

  constructor(private http: HttpClient) { }

  onCreatepost(user: { name: string, email: string, password: string, phone: string }) {

    console.log(user);

    this.http.post('http://localhost:8080/users',
      user).subscribe(responseData => {
        console.log(responseData);
        this.fetchUsers()
      });
  }

  private fetchUsers() {

    this.http.get('http://localhost:8080/users')
      .pipe(map( responseData => {
            const usersArray = [];
            for (const key in responseData) {
                usersArray.push({...responseData[key]}, id:key)   
            }
      }))
      .subscribe(
        users => {

          console.log(users);
          return this.users = users;

        }
      )
  }

  getUsers() {
    this.fetchUsers();
  }
}
