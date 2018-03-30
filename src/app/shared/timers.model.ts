import { Time } from "@angular/common";

export class Timer {
    constructor(
        public timeSpent: Time,
        public timeEstimated: Time,
        public date: Date,
        public description: string,
        public status: string,
    ) {
    }
}