export interface ICreateOrder {
    user_id: number,
    status: string,
}

export interface IUpdateOrder {
    status: string,
}

export interface IOrder {
    id: number,
    user_id: number,
    status: string,
    created_at: string,
}

export interface IOrderSerialized {
    id: number,
    user_id: number,
    status: string,
    created_at: string,
}