import { Time } from "@angular/common";

export interface Timer {
    timeSpent: {
        hours: number,
        minutes: number,
        seconds: number,
    },
    timeEstimated: {
        hours: number,
        minutes: number,
        seconds: number,
    },
    date: Date,
    description: string,
    status: string,
    id?: string,
    _id?: string
}