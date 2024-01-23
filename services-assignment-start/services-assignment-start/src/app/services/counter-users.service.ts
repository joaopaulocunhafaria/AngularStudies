import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterUsersService {

  constructor() { }


  userQuantity(users: string[]) {
    return users.length
  }

}
