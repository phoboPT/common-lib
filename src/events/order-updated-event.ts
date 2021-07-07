import { OrderStatus } from './types/order-status';

import { Subjects } from './subjects';

export interface OrderUpdatedEvent {
    subject: Subjects.OrderCreated;
    data: {
        id: string;
        status: OrderStatus;
        ticket: {
            id: string;
        };

        userId: string;
        expiresAt: string;
        routeId: string;
    };
}
