import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
    selector: 'app-timer-list-actions',
    templateUrl: './timer-list-actions.component.html',
    styleUrls: ['./timer-list-actions.component.css']
})
export class TimerListActionsComponent implements OnInit {

    constructor(private timerService: TimerService) { }

    ngOnInit() {
    }

    addTimer() {
        this.timerService.addTimer();
    }

}
