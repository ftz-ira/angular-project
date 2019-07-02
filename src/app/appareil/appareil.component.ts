import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  onSwitch(){
   
    if(this.appareilStatus === 'allume'){
      this.appareilService.switchOff(this.index);
    }else if(this.appareilStatus === 'eteint'){
      this.appareilService.switchOn(this.index);
    }
  }

  getStatus(): string{
    return this.appareilStatus;
  }
  getColor(): string{
    return (this.appareilStatus === 'allume')? 'green' : 'red';
  }
}
