import { OrderStatus } from './types/order-status';
import { Subjects } from './subjects';

export interface OrderUpdatedEvent {
    subject: Subjects.OrderUpdated;
    data: {
        id: string;
        status: OrderStatus;
        route: {
            id: string;
        };
        userId: string;
        expiresAt: string;
        routeId: string;
    };
}
