import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-veiw',
  templateUrl: './appareil-veiw.component.html',
  styleUrls: ['./appareil-veiw.component.scss']
})
export class AppareilVeiwComponent implements OnInit, OnDestroy {



  appareils: any[];
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) { }

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  turnAllOn() {
    this.appareilService.switchOnAll();
  }

  turnAllOff() {
    if (confirm('tout éteindre ?')) {
      this.appareilService.switchOffAll();
    } else {
      return;
    }

  }
  ngOnDestroy(): void {
    this.appareilSubscription.unsubscribe();
  }
}
