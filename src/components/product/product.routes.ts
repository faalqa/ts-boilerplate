import { Express } from 'express';
import { requireAuth } from '../../middlewares/require-auth';
import { validateRequest } from '../../middlewares/validate-request';

import ProductController from './product.controller';
import { getProductValidation } from './product.schemas';

const productRouter = (app: Express) => {

  app.get('/products', requireAuth, ProductController.getProducts);
  app.get('/products/:id', requireAuth, validateRequest(getProductValidation),
    ProductController.getProduct);

};

export default productRouter;