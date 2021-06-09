import { Subjects } from "./subjects";

export interface RouteCreatedEvent {
    subject: Subjects.RouteCreated

    data: {
        id: string,
        userId: string
        type: string
        startLocation: string
        endLocation: string
        availableTime: string
        vehiculeId: string
        state: string
        description: string
        estimatedTime: string
        startDate: string
        userImage: string
    }
}