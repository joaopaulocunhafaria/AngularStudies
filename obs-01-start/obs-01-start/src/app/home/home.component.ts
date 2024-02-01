import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { combineAll } from 'rxjs-compat/operator/combineAll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObservableSubscription: Subscription;

  constructor() { }


  ngOnInit() {
    // this.firstObservableSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const personalizedIntervalObserver = Observable.create(observer => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count);

        if (count>3) {
          observer.error(new Error(" greater than 3"));
          
        }
        count++;
      }, 1000)

    })

     this.firstObservableSubscription= personalizedIntervalObserver
     .subscribe(data=>{
      console.log(data)
    }, error=>{
      console.log("erro, counter is"+error.message);
      
    }
    )
  }

  ngOnDestroy(): void {
    this.firstObservableSubscription.unsubscribe();
    
  }

}
