import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    postUser(user: { name: string, password: string, phone: string, email: string }) {
        this.http.post('http://localhost:8080/users', user).subscribe(
            () => {
                this.featchUsers();
            }
        );
    }


    featchUsers() {
        let users = []
        this.http.get('http://localhost:8080/users')
          .pipe(map( responseData => {
            const usersArray = [];
            for (const key in responseData) {
                usersArray.push({...responseData[key], id:key})   
            }
            return usersArray
      }))
        .subscribe(
            responseData => {
                  users = responseData;
            }
        )
        return users;
    }
}