import { Request, Response } from 'express';
import { ICreateProduct } from './product.interfaces';
import Product from './product.model';

class ProductController {

  async getProduct(req: Request, res: Response){
    const product = await Product.findOneById(+req.params.id);
    if(!product){
      res.status(404).send({ message: 'Product Not Found!' });
    }
    res.send(product);
  }

  async getProducts(req: Request, res: Response){
    const products = await Product.findAll();
    res.send(products);
  }

  async makeProduct(req: Request, res: Response){
    const {
      name,
      price,
    } = req.body;

    const dataObject: ICreateProduct = { name, price };
    const product = await Product.create(dataObject);
    res.status(201).send(product);
  }
}

export default new ProductController();