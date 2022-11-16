import { Request, Response } from 'express';
import { ICreateOrder } from './order.interfaces';
import Order from './order.model';

class OrderController {

  async getOrder(req: Request, res: Response){
    const order = await Order.findOneById(+req.params.id);
    if(!order){
      res.status(404).send({ message: 'Order Not Found!' });
    }
    res.send(order);
  }

  async getOrders(req: Request, res: Response){
    const orders = await Order.findAll();
    res.send(orders);
  }

  async makeOrder(req: Request, res: Response){
    // 1. select product (product already in db)

    // 2. create order

    // 3. add product to order
    const {
      user_id,
      product_id,
      order_id,
      quantity,
    } = req.body;

    const dataObject: ICreateOrder = { user_id };
    /*
      in create() function, insert to all tables, maybe
    */

    const order = await Order.create(dataObject);
    res.status(201).send(order);
  }
}

export default new OrderController();