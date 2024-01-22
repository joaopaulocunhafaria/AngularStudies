import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable( )
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];  
  
   constructor(private logService:LoggingService){
   }
  onAddAcount(newAccount: {name: string, status: string}){
    this.accounts.push(newAccount);
    this.logService.loggingstatusChange(newAccount.status)
  }

  onUpdateAcount(updateInfo: {id: number, newStatus: string}){
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    
    this.logService.loggingstatusChange(updateInfo.newStatus)
  }
 
}
