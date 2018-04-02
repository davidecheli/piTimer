import { Component, OnInit, Input } from '@angular/core';
import { Timer } from '../../shared/timers.model';
import { TimerService } from '../../services/timer.service';

@Component({
	selector: 'app-timer-item',
	templateUrl: './timer-item.component.html',
	styleUrls: ['./timer-item.component.css']
})
export class TimerItemComponent implements OnInit {
    @Input() timer: Timer;
    @Input() index: number;
    inputDescription = false;

	constructor(private timerService:TimerService) { }

	ngOnInit() {
	}

	playTimer() {
        this.timerService.startTimer(this.index);
        this.toggleTimerStatus();
    }
    
    stopTimer() {
        this.timerService.stopTimer(this.index);
        this.toggleTimerStatus();
    }

    toggleTimerStatus() {
        this.timerService.timers[this.index].status = this.timerService.timers[this.index].status === 'play' ? 'stop' : 'play';
    }

    toggleInputDescription() {
        this.inputDescription = this.inputDescription ? false : true;
    }

    removeTimer() {
        this.timerService.removeTimer(this.index);
    }

}
