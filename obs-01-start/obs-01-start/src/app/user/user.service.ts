import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({providedIn:"root"})
export class userService{


  isActivated= new Subject<boolean>();

  activated(){
    this.isActivated.next(true);
  }


}