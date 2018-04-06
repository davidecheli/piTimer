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
    public timerPlay = [];
    private timersCollectionRef: AngularFirestoreCollection<Timer>;
    public timers: Observable<Timer[]>;

    constructor(public angularFireAuth: AngularFireAuth, public angularFirestore: AngularFirestore) {
        this.angularFireAuth.auth.signInAnonymously();
        this.timersCollectionRef = this.angularFirestore.collection('timers', ref => ref.orderBy('date', 'desc'));
        this.timers = this.timersCollectionRef.snapshotChanges().map(actions => {
            return actions.map( a => {
                const _data = a.payload.doc.data() as Timer;
                const _id = a.payload.doc.id;
                return {_id, ..._data}
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
        this.timersCollectionRef.doc(_timer.id || _timer._id).update(_timer);
    }

    removeTimer(_id) {
        this.stopTimer(_id);
        this.timersCollectionRef.doc(_id).delete();
    }

    showDate() {
        return new Date().valueOf();
    }

    getTimers() {
        return this.timers;
    }

    startTimer(_timer) {
        let _timeTemp = _timer.timeSpent;
        this.interval[_timer.id || _timer._id] = Observable.interval(1000).subscribe(() => {
            _timeTemp = this.addASecond(_timeTemp.hours, _timeTemp.minutes, _timeTemp.seconds);

            this.timersCollectionRef.doc(_timer.id || _timer._id).update({
                timeSpent: {hours: _timeTemp.hours, minutes: _timeTemp.minutes, seconds: _timeTemp.seconds},
                timeEstimated: _timer.timeEstimated,
                date: _timer.date,
                description: _timer.description,
                status: _timer.status
            });
        });
    }

    stopTimer(_timerId) {
        if (this.interval[_timerId])
            this.interval[_timerId].unsubscribe();
    }

    addASecond(_hours, _minutes, _seconds) {
        if (_seconds < 59){
            _seconds++;
            return {hours: _hours, minutes: _minutes, seconds: _seconds};
        } else if (_minutes < 59) {
            _minutes++;
            return {hours: _hours, minutes: _minutes, seconds: 0};
        } else {
            _hours++;
            return {hours: _hours, minutes: 0, seconds: 0};
        }
    }
}
