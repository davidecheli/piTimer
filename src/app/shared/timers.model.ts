import { Time } from "@angular/common";

export class Timer {
    constructor(
        public timeSpent: {
            hours: number,
            minutes: number,
            seconds: number,
        },
        public timeEstimated: {
            hours: number,
            minutes: number,
            seconds: number,
        },
        public date: Date,
        public description: string,
        public status: string,
    ) {
    }
}