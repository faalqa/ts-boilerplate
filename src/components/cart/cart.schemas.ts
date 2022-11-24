import Joi from 'joi';
import { IValidationSchema } from '../../utils/joi.interfaces';

export const getCartValidation: IValidationSchema = {
  params: Joi.object({
    id: Joi
      .number()
      .required(),
  }).required(),
};

export const addToCartValidation: IValidationSchema = {
  body: Joi.object({
    order_id: Joi
      .number()
      .required(),
    product_id: Joi
      .number()
      .required(),
    quantity: Joi
      .number()
      .required(),
  }).required(),
};