import { Component, OnInit, Input } from '@angular/core';
import { Timer } from '../../shared/timers.model';

@Component({
  selector: 'app-timer-item',
  templateUrl: './timer-item.component.html',
  styleUrls: ['./timer-item.component.css']
})
export class TimerItemComponent implements OnInit {
  @Input() timer: Timer;

  constructor() { }

  ngOnInit() {
  }

}
