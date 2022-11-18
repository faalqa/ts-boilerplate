import { Express } from 'express';
// import { requireAuth } from '../../middlewares/require-auth';
// import { validateRequest } from '../../middlewares/validate-request';

import CartController from './cart.controller';
// import { createCartValidation, getCartValidation } from './cart.schemas';

const cartRouter = (app: Express) => {

  // app.get('/carts', CartController.getCart);
  app.get('/carts/:id', CartController.getCart); // order id
  app.post('/carts', CartController.addToCart);
  app.put('/carts', CartController.changeStatus);

};

export default cartRouter;