// src/middleware/validateProduct.js

const { ValidationError } = require('../utils/customErrors');

const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || typeof name !== 'string') {
    throw new ValidationError('Product name is required and must be a string.');
  }

  if (!description || typeof description !== 'string') {
    throw new ValidationError('Product description is required and must be a string.');
  }

  if (price === undefined || typeof price !== 'number') {
    throw new ValidationError('Product price is required and must be a number.');
  }

  if (!category || typeof category !== 'string') {
    throw new ValidationError('Product category is required and must be a string.');
  }

  if (inStock === undefined || typeof inStock !== 'boolean') {
    throw new ValidationError('Product inStock status is required and must be a boolean.');
  }

  next();
};

module.exports = validateProduct;