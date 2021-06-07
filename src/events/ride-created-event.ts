import { Subjects } from "./subjects";

export interface RideCreatedEvent {
    subject: Subjects.RideCreated

    data: {
        id: string,
        location: string,
        userId: string,
        type: string,
        availableTime: string,
        state: string
    }
}