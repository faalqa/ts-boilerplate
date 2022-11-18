import { Express } from 'express';
import user from './user/user.routes';
import product from './product/product.routes';
import order from './order/order.routes';
import cart from './cart/cart.routes';

class routing {

  api(app: Express) {
    user(app);
    product(app);
    order(app);
    cart(app);
  }
}
export default new routing();