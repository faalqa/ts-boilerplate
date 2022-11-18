import { Express } from 'express';

import ProductController from './product.controller';

const productRouter = (app: Express) => {

  app.get('/products', ProductController.getProducts);
  app.get('/products/:id', ProductController.getProduct);

};

export default productRouter;