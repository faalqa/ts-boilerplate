import supertest from 'supertest';
import app from '../../app';
import Common from '../../src/utils/common';

const truncateDB = async () => {
  await Common.dbTruncate();
};

const signup = async (num: number) => {
  const response = await supertest(app)
    .post('/users')
    .send({
      firstname: 'test',
      lastname: 'test',
      email: `test${num}@test.com`,
      password: '12345678',
    });
  return response;
};

const login = async (num: number) => {
  const response = await supertest(app)
    .post('/users/login')
    .send({
      email: `test${num}@test.com`,
      password: '12345678',
    });

  return response;
};

const order = async (num: number, token: string) => {
  const response = await supertest(app)
    .post('/orders')
    .set('Authorization', 'Bearer ' + token)
    .send({
      user_id: num,
      status: 'Active',
    });

  return response;
};

const showProducts = async (token: string) => {
  const response = await supertest(app)
    .get('/orders')
    .set('Authorization', 'Bearer ' + token);

  return response;
};

export { truncateDB, signup, login, order, showProducts };