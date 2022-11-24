import { Express } from 'express';
import { requireAuth } from '../../middlewares/require-auth';
import { validateRequest } from '../../middlewares/validate-request';

import CartController from './cart.controller';
import { addToCartValidation, getCartValidation } from './cart.schemas';

const cartRouter = (app: Express) => {

  app.get('/carts/:id', requireAuth, validateRequest(getCartValidation),
    CartController.getCart); // order id
  app.post('/carts', requireAuth, validateRequest(addToCartValidation),
    CartController.addToCart);

};

export default cartRouter;