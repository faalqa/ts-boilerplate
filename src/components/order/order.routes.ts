import { Express } from 'express';
import { requireAuth } from '../../middlewares/require-auth';
import { validateRequest } from '../../middlewares/validate-request';

import OrderController from './order.controller';
import { createOrderValidation, getOrderValidation } from './order.schemas';

const orderRouter = (app: Express) => {

  app.get('/orders', requireAuth, OrderController.getOrders);
  app.get('/orders/:id', requireAuth, validateRequest(getOrderValidation),
    OrderController.getOrder);

  app.post('/orders', requireAuth, validateRequest(createOrderValidation),
    OrderController.makeOrder);
  app.put('/orders', requireAuth, OrderController.changeStatus);

};

export default orderRouter;