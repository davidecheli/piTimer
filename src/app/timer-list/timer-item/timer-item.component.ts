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

	constructor(private timerService:TimerService) { }

	ngOnInit() {
	}

	playTimer() {
		this.timerService.startTimer(this.index);
    }
    
    stopTimer() {
        this.timerService.stopTimer(this.index);
    }

}
