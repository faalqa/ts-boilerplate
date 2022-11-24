import app from '../../../app';
import supertest from 'supertest';
import Common from '../../utils/common';
import { sequelize } from '../../../config/sequelize';
import { QueryTypes } from 'sequelize';
import { order, login, signup, truncateDB, showProducts } from '../../../spec/utils';

describe('Cart Endpoint', function() {

  describe('Testing cart endpoint ', function() {
    beforeEach(async() => {
      await truncateDB();
    });

    it('Add to cart', async function() {

      await Common.dbInsertion('products', {
        name: 'Saudi T-Shirt',
        price: 200,
      });

      const products = Array.from(
        await sequelize.query('SELECT * from products;', { type: QueryTypes.SELECT }),
      );

      const product = products[0] as any;

      const signupRes = await signup(5);
      const user = signupRes.body.data.user;

      const loginRes = await login(5);
      const token = loginRes.body.data.token;

      const showRes = await showProducts(token);

      const orderRes = await order(user.id, token);
      const order_id = orderRes.body.id;

      // status code should be 201 `Created`
      const response = await supertest(app)
        .post('/carts')
        .set('Authorization', 'Bearer ' + token)
        .send({
          order_id: order_id,
          product_id: product.id,
          quantity: 3,
        });

      expect(response.statusCode).toBe(201);
    });
  });

});
