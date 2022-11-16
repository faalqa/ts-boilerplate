export interface ICreateOrder {
    user_id: number
}

export interface IOrder {
    id: number,
    user_id: number,
    created_at: string,
}

export interface IOrderSerialized {
    id: number,
    user_id: number,
    created_at: string,
}