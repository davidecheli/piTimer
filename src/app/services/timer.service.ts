import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { Timer } from '../shared/timers.model';

@Injectable()
export class TimerService {
    private timers: Timer[] = [
        new Timer(
            {
                hours: 7,
                minutes: 15
            },
            {
                hours: 8,
                minutes: 0
            },
            new Date(1522188002383),
            'Developing arrows',
            'none'
        ),
        new Timer(
            {
                hours: 5,
                minutes: 30
            },
            {
                hours: 5,
                minutes: 30
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
            timeSpent: {hours: 0, minutes: 0},
            timeEstimated: {hours: 0, minutes: 0},
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
}
