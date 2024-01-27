import { BAD_REQUEST, SUCCESS } from '../config/status';

import Product from '../models/Product';

import ProductPicture from './../models/ProductPicture';

class ProductController {

  // Create
  async create(req, res) {
    try {
      const product = await Product.create(req.body)

      const { name, brand, model, price, description, color, weight, dimensions } = product

      return res.status(SUCCESS).json({
        name,
        brand,
        model,
        price,
        description,
        color,
        weight,
        dimensions
      });
    } catch (err) {
      return res.status(BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // List All
  async listAll(req, res) {
    const products = await Product.findAll({
      attributes: [
        "id",
        "name",
        "brand",
        "model",
        "description",
        "color",
        "weight",
        "dimensions"
      ],
      order: [['id', 'DESC'], [ProductPicture, 'id', 'DESC']],
      include: {
        model: ProductPicture,
        attributes: ['filename', 'url']
      }
    });
    return res.status(SUCCESS).json(products);
  }
  // List by id
  async listById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(BAD_REQUEST).json({
          error: "ID not founded"
        });
      }

      const product = await Product.findByPk(id, {
        attributes: [
          "id",
          "name",
          "brand",
          "model",
          "description",
          "color",
          "weight",
          "dimensions",
        ],
        order: [['id', 'DESC'], [ProductPicture, 'id', 'DESC']],
        include: {
          model: ProductPicture,
          attributes: ['filename', 'url']
        }
      });

      if (!product) {
        return res.status(BAD_REQUEST).json({
          error: "Product not founded"
        });
      }


      return res.status(SUCCESS).json(product);

    } catch (err) {
      return res.status(BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(BAD_REQUEST).json({
          error: "ID not founded"
        });
      }

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(BAD_REQUEST).json({
          error: "Product not founded"
        });
      }

      const newProduct = await product.update(req.body);


      return res.status(SUCCESS).json(newProduct);

    } catch (err) {
      return res.status(BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(BAD_REQUEST).json({
          error: "ID not founded"
        });
      }

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(BAD_REQUEST).json({
          error: "Product not founded"
        });
      }

      await product.destroy()


      return res.status(SUCCESS).send({
        msg: 'product deleted successfully'
      });

    } catch (err) {
      return res.status(BAD_REQUEST).send({
        errors: err.errors.map((e) => e.message)
      });
    }
  }
}

export default new ProductController();
