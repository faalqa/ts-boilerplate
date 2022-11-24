import app from '../../../app';
import supertest from 'supertest';
import { login, signup, truncateDB } from '../../../spec/utils';

describe('Order Endpoint', function() {

  describe('Testing order endpoint ', function() {
    beforeEach(async() => {
      await truncateDB();
    });

    it('creates an order for a user', async function() {

      const signupRes = await signup(5);
      const user = signupRes.body.data.user;

      const loginRes = await login(5);
      const token = loginRes.body.data.token;

      // status code should be 201 `Created`
      const response = await supertest(app)
        .post('/orders')
        .set('Authorization', 'Bearer ' + token)
        .send({
          user_id: user.id,
          status: 'Active',
        });

      expect(response.statusCode).toBe(201);
    });
  });

});
