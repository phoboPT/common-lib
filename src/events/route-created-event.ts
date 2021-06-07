import { Subjects } from "./subjects";

export interface RouteCreatedEvent {
    subject: Subjects.RouteCreated

    data: {
        id: string,
        location: string,
        userId: string,
        type: string,
        availableTime: string,
        state: string
    }
}