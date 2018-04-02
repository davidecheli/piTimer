import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { Timer } from '../shared/timers.model';
import { Observable } from 'rxjs/Rx';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class TimerService {
    private interval = [];
    private timersCollectionRef: AngularFirestoreCollection<Timer>;
    public timers: Observable<Timer[]>;

    constructor(public angularFireAuth: AngularFireAuth, public angularFirestore: AngularFirestore) {
        this.angularFireAuth.auth.signInAnonymously();
        this.timersCollectionRef = this.angularFirestore.collection('timers');
        this.timers = this.timersCollectionRef.snapshotChanges().map(actions => {
            return actions.map( a => {
                const data = a.payload.doc.data() as Timer;
                const id = a.payload.doc.id;
                return {id, ...data}
            });
        });
    }

    addTimer() {
        this.timersCollectionRef.add({
            timeSpent: {hours: 0, minutes: 0, seconds: 0},
            timeEstimated: {hours: 0, minutes: 0, seconds: 0},
            date: new Date(),
            description: '',
            status: 'stop'
        });
    }

    updateTimer(_timer) {
        this.timersCollectionRef.doc(_timer.id).update(_timer);
    }

    removeTimer(_id) {
        this.timersCollectionRef.doc(_id).delete();
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
