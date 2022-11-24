import Common from '../../utils/common';
import { ICreateOrder, IUpdateOrder, IOrderSerialized } from './order.interfaces';

class Order {
  static tableName = 'orders';

  static async findOneById(id: number): Promise<IOrderSerialized | null>{
    const rows = await Common.dbFetch(Order.tableName, { id });
    if(rows?.length){
      const order = rows[0] as IOrderSerialized;

      return order;
    }else{
      return null;
    }
  }

  static async findAll(): Promise<IOrderSerialized[]>{
    const rows = await Common.dbFetch(
      Order.tableName,
      null,
      [
        'id',
        'user_id',
        'created_at',
      ],
    );
    return rows as IOrderSerialized[];
  }

  static async create(order: ICreateOrder): Promise<IOrderSerialized | null>{
    const insertQuery = await Common.dbInsertion(Order.tableName, order);
    if(insertQuery && insertQuery.inserted){
      const newOrder = insertQuery.data[0] as IOrderSerialized;

      return newOrder;
    }else{
      return null;
    }
  }

  static async changeStatus(cart: IUpdateOrder, order_id: number): Promise<IOrderSerialized | null>{
    const updateQuery = await Common.dbUpdate(Order.tableName, cart, {order_id});
    if(updateQuery && updateQuery.updated){
      const newCart = updateQuery.data[0] as IOrderSerialized;

      return newCart;
    }else{
      return null;
    }
  }
}

export default Order;