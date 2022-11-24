export interface ICreateCart {
    order_id: number,
    product_id: number,
    quantity: number,
}

export interface ICart {
    id: number,
    order_id: number,
    product_id: number,
    quantity: number,
    created_at: string,
}

export interface ICartSerialized {
    id: number,
    order_id: number,
    product_id: number,
    quantity: number,
    created_at: string,
}