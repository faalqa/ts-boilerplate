import Common from '../../utils/common';
import { IArticle, IArticleSerialized, ICreateArticle } from './article.interfaces';

class Article {
  static tableName = 'articles';

  static async findOneById(id: number): Promise<IArticleSerialized | null>{
    const rows = await Common.dbFetch(Article.tableName, { id });
    if(rows?.length){
      const article = rows[0] as IArticleSerialized;

      return article;
    }else{
      return null;
    }
  }

  static async findAll(): Promise<IArticleSerialized[]>{
    const rows = await Common.dbFetch(
      Article.tableName,
      null,
      [
        'id',
        'title',
        'content',
        'created_at',
      ],
    );
    return rows as IArticleSerialized[];
  }

  static async create(article: ICreateArticle): Promise<IArticleSerialized | null>{
    const insertQuery = await Common.dbInsertion(Article.tableName, article);
    if(insertQuery && insertQuery.inserted){
      const newArticle = insertQuery.data[0] as IArticleSerialized;

      return newArticle;
    }else{
      return null;
    }
  }
}

export default Article;