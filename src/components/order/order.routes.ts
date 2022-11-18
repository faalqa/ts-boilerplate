import { Express } from 'express';
// import { requireAuth } from '../../middlewares/require-auth';
// import { validateRequest } from '../../middlewares/validate-request';

import OrderController from './order.controller';
// import { createOrderValidation, getOrderValidation } from './order.schemas';

const orderRouter = (app: Express) => {

  //   app.get('/me', OrderController.getProfile);
  app.get('/orders', OrderController.getOrders);
  app.get('/orders/:id', OrderController.getOrder);

  // Auth
  app.post('/orders', OrderController.makeOrder);
  //   app.post('/orders/login', OrderController.login);

};

export default orderRouter;