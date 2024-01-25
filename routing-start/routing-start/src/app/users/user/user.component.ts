import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
   private subscription:Subscription
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params["name"],
      id: this.route.snapshot.params["id"]
    }

    this.subscription=this.route.params
      .subscribe(
        (params: Params) => {
          this.user.name = params["name"];
          this.user.id = params["id"];
        }
      )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()    
  }
}
