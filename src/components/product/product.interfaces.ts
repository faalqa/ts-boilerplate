export interface ICreateProduct {
    name: string,
    price: string,
}

export interface IProduct {
    id: number,
    name: string,
    price: string,
    created_at: string,
}

export interface IProductSerialized {
    id: number,
    name: string,
    price: string,
    created_at: string,
}