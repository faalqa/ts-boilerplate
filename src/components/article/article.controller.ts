import { Request, Response } from 'express';
import { ICreateArticle } from './article.interfaces';
import Article from './article.model';

class ArticleController {

  async getArticle(req: Request, res: Response){
    const article = await Article.findOneById(+req.params.id);
    if(!article){
      res.status(404).send({ message: 'Article Not Found!' });
    }
    res.send(article);
  }

  async getArticles(req: Request, res: Response){
    const articles = await Article.findAll();
    res.send(articles);
  }

  async createArticle(req: Request, res: Response){
    const {
      title,
      content,
    } = req.body;

    const dataObject: ICreateArticle = { title, content};

    const article = await Article.create(dataObject);
    res.status(201).send(article);
  }
}

export default new ArticleController();