import Common from '../../utils/common';
import { ICreatePost, IPost, IPostSerialized } from './post.interfaces';

class Post {
  static tableName = 'posts';

  //   static async findOneById(id: number): Promise<IPostSerialized | null>{
  //     const rows = await Common.dbFetch(User.tableName, { id });
  //     if(rows?.length){
  //       const user = rows[0] as IUserSerialized;

  //       // removing password from the object before serializing it
  //       user.password = undefined;
  //       return user;
  //     }else{
  //       return null;
  //     }
  //   }

  //   static async findOneByEmail(email: string): Promise<IUser | null>{
  //     const rows = await Common.dbFetch(User.tableName, { email });
  //     if(rows?.length){
  //       return rows[0] as IUser;
  //     }else{
  //       return null;
  //     }
  //   }

  //   static async findAll(): Promise<IUserSerialized[]>{
  //     const rows = await Common.dbFetch(
  //       User.tableName,
  //       null,
  //       [
  //         'id',
  //         'firstname',
  //         'lastname',
  //         'email',
  //         'created_at',
  //       ],
  //     );
  //     return rows as IUserSerialized[];
  //   }

  static async create(post: ICreatePost): Promise<IPostSerialized | null>{
    const insertQuery = await Common.dbInsertion(Post.tableName, post);
    if(insertQuery && insertQuery.inserted){
      const newPost = insertQuery.data[0] as IPostSerialized;

      // removing password from the object before serializing it
      return newPost;
    }else{
      return null;
    }
  }
}

export default Post;