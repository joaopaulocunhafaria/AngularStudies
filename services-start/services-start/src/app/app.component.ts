import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  accounts:{name:string,status:string}[];
  
  constructor(private serviceAccount:AccountService){}
 
  ngOnInit(): void {
    this.accounts=this.serviceAccount.accounts;
  }
  
  
}
