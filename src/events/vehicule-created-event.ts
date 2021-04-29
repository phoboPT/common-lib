import { Subjects } from "./subjects";

export interface VehiculeCreatedEvent {
    subject: Subjects.VehiculeCreated

    data: {
        id: string,
        location: string,
        userId: string,
        type: string
    }
}