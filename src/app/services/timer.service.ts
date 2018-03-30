import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { Timer } from '../shared/timers.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TimerService {
    private interval = [];
    public timers: Timer[] = [
        new Timer(
            {
                hours: 7,
                minutes: 15,
                seconds: 0,
            },
            {
                hours: 8,
                minutes: 0,
                seconds: 0,
            },
            new Date(1522188002383),
            'Developing arrows',
            'none'
        ),
        new Timer(
            {
                hours: 5,
                minutes: 30,
                seconds: 0,
            },
            {
                hours: 5,
                minutes: 30,
                seconds: 0,
            },
            new Date(1522188002383),
            'Building cats',
            'play'
        )
    ];

    constructor() { 
    }

    addTimer() {
        this.timers.push({
            timeSpent: {hours: 0, minutes: 0, seconds: 0},
            timeEstimated: {hours: 0, minutes: 0, seconds: 0},
            date: new Date(),
            description: '',
            status: 'none'
        });
    }

    showDate() {
        return new Date().valueOf();
    }

    getTimers() {
        return this.timers;
    }

    startTimer(_index) {
        let _time;
        this.interval[_index] = Observable.interval(1000).subscribe(() => {
            _time = this.addASecond(this.timers[_index].timeSpent.hours, this.timers[_index].timeSpent.minutes, this.timers[_index].timeSpent.seconds);
            this.timers[_index].timeSpent = {
                hours: _time[0],
                minutes: _time[1],
                seconds: _time[2]
            }
        });
    }

    stopTimer(_index) {
        this.interval[_index].unsubscribe();
    }

    addASecond(_hours, _minutes, _seconds) {
        if (_seconds < 59){
            _seconds++;
            return [_hours, _minutes, _seconds];
        } else if (_minutes < 59) {
            _minutes++;
            return [_hours, _minutes, 0];
        } else {
            _hours++;
            return [_hours, 0, 0];
        }
    }
}
