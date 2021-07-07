import { OrderStatus } from './types/order-status';

import { Subjects } from './subjects';

export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;
    data: {
        id: string;

        ticket: {
            id: string;
        };
    };
}
