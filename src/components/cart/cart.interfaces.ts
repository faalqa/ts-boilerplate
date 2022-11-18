export interface ICreateCart {
    order_id: number,
    product_id: number,
    quantity: number,
    status: string,
}

export interface IUpdateCart {
    order_id: number,
    quantity?: number,
    status?: string,
}

export interface ICart {
    id: number,
    order_id: number,
    product_id: number,
    quantity: number,
    status: string,
    created_at: string,
}

export interface ICartSerialized {
    id: number,
    order_id: number,
    product_id: number,
    quantity: number,
    status: string,
    created_at: string,
}