import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { userService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObservableSubscription: Subscription;


  constructor( ) { }


  ngOnInit() {
    // this.firstObservableSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const personalizedIntervalObserver = Observable.create(observer => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2) {
          observer.complete()
        }
        if (count > 3) {
          observer.error(new Error(" greater than 3"));

        }
        count++;
      }, 1000)

    })



    this.firstObservableSubscription = personalizedIntervalObserver.pipe(
      filter(
        (data: number) => data % 2 == 0
      ),

      map(
        (data: number) => "Round: " + (data + 1)
      ))
      .subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log("erro, counter is" + error.message);

        },
        () => {
          console.log("Observable was completed");

        }
      )

 

  }

  ngOnDestroy(): void {
    this.firstObservableSubscription.unsubscribe(); 
  }

}
