import app from '../../../app';
import supertest from 'supertest';
import { truncateDB } from '../../../spec/utils';

describe('[E2E] Order', function() {

  describe('Testing the signup endpoint', function() {
    beforeEach(async() => {
      await truncateDB();
    });

    // Success scenarios
    it('creates an account', async function() {
      // status code should be 201 `Created`
      const response = await supertest(app)
        .post('/orders')
        .send({
          firstname: 'test',
          lastname: 'test',
          email: 'test@test.com',
          password: '12345678',
        });

      expect(response.statusCode).toBe(201);
    });

    // Failure scenarios
    it('returns 400 if an account existed with the same email address', async function() {
      // status code should be 201 `Created`
      const createOrder1Response = await supertest(app)
        .post('/orders')
        .send({
          firstname: 'test',
          lastname: 'test',
          email: 'test@test.com',
          password: '12345678',
        });
      expect(createOrder1Response.statusCode).toBe(201);

      // status code should be 400
      const createOrder2Response = await supertest(app)
        .post('/orders')
        .send({
          firstname: 'test',
          lastname: 'test',
          email: 'test@test.com',
          password: '12345678',
        });
      expect(createOrder2Response.statusCode).toBe(400);
    });
  });

});
