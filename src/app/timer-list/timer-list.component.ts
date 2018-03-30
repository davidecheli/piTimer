import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { Timer } from '../shared/timers.model';

    @Component({
        selector: 'app-timer-list',
        templateUrl: './timer-list.component.html',
        styleUrls: ['./timer-list.component.css']
    })
export class TimerListComponent implements OnInit {
    timers: Timer[];

    constructor(private timerService: TimerService) { }

    ngOnInit() {
        this.timers = this.timerService.timers;
    }

}
