import { Subjects } from "./subjects";

export interface VehiculeUpdatedEvent {
    subject: Subjects.VehiculeUpdated

    data: {
        id: string,
        location: string,
        userId: string,
        type: string
    }
}