import { Subjects } from "./subjects";

export interface RouteUpdatedEvent {
    subject: Subjects.RouteUpdated

    data: {
        id: string,
        location: string,
        userId: string,
        type: string,
        availableTime: string,
        state: string
    }
}