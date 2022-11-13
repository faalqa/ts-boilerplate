import { Request, Response } from 'express';
import { ICreatePost } from './post.interfaces';
import Post from './post.model';

class PostController {

  //   async getUser(req: Request, res: Response){
  //     const user = await Post.findOneById(+req.params.id);
  //     if(!user){
  //       res.status(404).send({ message: 'User Not Found!' });
  //     }
  //     res.send(user);
  //   }

  //   async getUsers(req: Request, res: Response){
  //     const users = await Post.findAll();
  //     res.send(users);
  //   }

  async publish(req: Request, res: Response){
    const {
      userId,
      content,
    } = req.body;

    const dataObject: ICreatePost = { userId, content };

    const post = await Post.create(dataObject);
    res.status(201).send(post);
  }
}

export default new PostController();