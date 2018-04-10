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
    inputDescription = false;

	constructor(private timerService:TimerService) { }

	ngOnInit() {
	}

	playTimer() {
        this.timerService.startTimer(this.timer);
        this.toggleTimerStatus();
    }
    
    stopTimer() {
        this.toggleTimerStatus();
        this.timerService.stopTimer(this.timer.id || this.timer._id);
    }

    toggleTimerStatus() {
        this.timerService.timerPlay[this.timer.id || this.timer._id] = !this.isTimerPlay();
        this.updateTimer();
    }

    toggleInputDescription() {
        this.inputDescription = this.inputDescription ? false : true;
        this.updateTimer();
    }

    isTimerPlay() {
        return this.timerService.timerPlay[this.timer.id || this.timer._id] || false;
    }

    updateTimer() {
        this.timerService.updateTimer(this.timer);
    }

    removeTimer() {
        this.timerService.removeTimer(this.timer.id || this.timer._id);
    }

}
