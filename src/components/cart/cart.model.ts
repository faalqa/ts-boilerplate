import Common from '../../utils/common';
import { ICreateCart, IUpdateCart, ICart, ICartSerialized } from './cart.interfaces';

class Cart {
  static tableName = 'carts';

  static async findById(order_id: number): Promise<ICartSerialized[] | null>{
    const rows = await Common.dbFetch(Cart.tableName, { order_id });
    if(rows?.length){
      const cart = rows as ICartSerialized[];

      return cart;
    }else{
      return null;
    }
  }

  // static async findAll(): Promise<ICartSerialized[]>{
  //   const rows = await Common.dbFetch(
  //     Cart.tableName,
  //     null,
  //     [
  //       'id',
  //       'order_id',
  //       'product_id',
  //       'quantity',
  //       'status',
  //       'created_at',
  //     ],
  //   );
  //   return rows as ICartSerialized[];
  // }

  static async create(cart: ICreateCart): Promise<ICartSerialized | null>{
    const insertQuery = await Common.dbInsertion(Cart.tableName, cart);
    if(insertQuery && insertQuery.inserted){
      const newCart = insertQuery.data[0] as ICartSerialized;

      return newCart;
    }else{
      return null;
    }
  }

  static async changeStatus(cart: IUpdateCart, order_id: number): Promise<ICartSerialized | null>{
    const updateQuery = await Common.dbUpdate(Cart.tableName, cart, {order_id});
    if(updateQuery && updateQuery.updated){
      const newCart = updateQuery.data[0] as ICartSerialized;

      return newCart;
    }else{
      return null;
    }
  }
}

export default Cart;