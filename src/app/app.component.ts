import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
 
  seconde: number;
  subscription = new Subscription();

  ngOnInit() {
    const counter = interval(1000);
    this.subscription = counter.subscribe(
      (v) => {
        this.seconde = v;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('fini');
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
