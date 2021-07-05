import { OrderStatus } from './types/order-status';

import { Subjects } from "./subjects";

export interface OrderCreatedEvent{
    subject:Subjects.OrderCreated
    data:{
        id:string
        status:OrderStatus
        ticket:{
            id:string            
        }
        orderId:string
        userId:string
        expiresAt:string

    }

}