import { Request, Response } from 'express';
import { ICreateCart } from './cart.interfaces';
import Cart from './cart.model';
import CustomResponse from '../../utils/custom-response';
import { JWT } from '../../utils/jwt';

class CartController {

  async getCart(req: Request, res: Response){
    const cart = await Cart.findById(+req.params.id);
    if(!cart){
      res.status(404).send({ message: 'Cart is empty!' });
    }
    res.send(cart);
  }

  async addToCart(req: Request, res: Response){
    const {
      order_id,
      product_id,
      quantity,
    } = req.body;

    const dataObject: ICreateCart = { order_id, product_id, quantity };
    const cart = await Cart.create(dataObject);
    if(cart){

      return CustomResponse.send(res, cart, 'Added Successfully', 201);
    }else{
      throw new Error();
    }
    // res.status(201).send(cart);
  }
}

export default new CartController();