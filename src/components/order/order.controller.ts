import { Request, Response } from 'express';
import { ICreateOrder, IUpdateOrder  } from './order.interfaces';
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

  // 1. initiate order (post - order)
  async makeOrder(req: Request, res: Response){
    const {
      user_id,
      status,
    } = req.body;

    const dataObject: ICreateOrder = { user_id, status };

    const order = await Order.create(dataObject);
    res.status(201).send(order);
  }

  async changeStatus(req: Request, res: Response){
    const {
      order_id,
      status,
    } = req.body;

    const dataObject: IUpdateOrder = { status };
    const carts = await Order.changeStatus(dataObject, order_id);
    res.send(carts);
  }
}

export default new OrderController();