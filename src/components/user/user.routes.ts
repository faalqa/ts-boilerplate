import { Express } from 'express';
import { requireAuth } from '../../middlewares/require-auth';
import { validateRequest } from '../../middlewares/validate-request';

import UserController from './user.controller';
import { createUserValidation, getUserValidation } from './user.schemas';

const userRouter = (app: Express) => {

<<<<<<< Updated upstream
  app.get('/me', requireAuth, UserController.getProfile);
  app.get('/users', requireAuth, UserController.getUsers);
  app.get('/users/:id', requireAuth, validateRequest(getUserValidation), UserController.getUser);

  // Auth
  app.post('/users', validateRequest(createUserValidation), UserController.signUp);
  app.post('/users/login', UserController.login);

};
=======
userRouter.get('/users', UserController.getUsers);
userRouter.get('/users/:id', validateRequest(getUserValidation), UserController.getUser);
console.log('in user.routes');
userRouter.post('/users', validateRequest(createUserValidation), UserController.signUp);
>>>>>>> Stashed changes

export default userRouter;