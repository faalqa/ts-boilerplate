import { Request, Response } from 'express';
import { ICreateCart, IUpdateCart } from './cart.interfaces';
import Cart from './cart.model';

class CartController {

  async getCart(req: Request, res: Response){
    const cart = await Cart.findById(+req.params.id);
    if(!cart){
      res.status(404).send({ message: 'Cart is empty!' });
    }
    res.send(cart);
  }

  async changeStatus(req: Request, res: Response){
    const {
      order_id,
      status,
    } = req.body;

    const dataObject: IUpdateCart = { order_id, status };
    const carts = await Cart.changeStatus(dataObject, +req.params.id);
    res.send(carts);
  }

  async addToCart(req: Request, res: Response){
    const {
      order_id,
      product_id,
      quantity,
      status,
    } = req.body;

    const dataObject: ICreateCart = { order_id, product_id, quantity, status };
    const cart = await Cart.create(dataObject);
    res.status(201).send(cart);
  }
}

export default new CartController();