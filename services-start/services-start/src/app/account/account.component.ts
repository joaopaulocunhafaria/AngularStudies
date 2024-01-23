import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]

})
export class AccountComponent implements OnChanges {
  @Input() account: { name: string, status: string };
  @Input() id: number;
   
  constructor(private service:LoggingService, private accountService:AccountService){}
  
  showparagraph:boolean;
  ngOnChanges(changes: SimpleChanges): void {
   
  this.showparagraph=this.accountService.showparagraph 
  
  }

  onSetTo(status: string) {
     this.accountService.onUpdateAcount({id:this.id,newStatus:status})
  }


}
