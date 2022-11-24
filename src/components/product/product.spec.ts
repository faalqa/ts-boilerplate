import app from '../../../app';
import supertest from 'supertest';
import { login, signup, truncateDB } from '../../../spec/utils';

describe('Product Endpoint', function() {

  describe('Testing product endpoint ', function() {
    beforeEach(async() => {
      await truncateDB();
    });

    it('Show all products with status code 200', async function() {

      const signupRes = await signup(5);
      const user = signupRes.body.data.user;

      const loginRes = await login(5);
      const token = loginRes.body.data.token;

      // status code should be 200 `OK`
      const response = await supertest(app)
        .get('/products')
        .set('Authorization', 'Bearer ' + token);

      expect(response.statusCode).toBe(200);
    });
  });

});
