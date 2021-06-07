import { Subjects } from "./subjects";

export interface RideUpdatedEvent {
    subject: Subjects.RideUpdated

    data: {
        id: string,
        location: string,
        userId: string,
        type: string,
        availableTime: string,
        state: string
    }
}