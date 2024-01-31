"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _status = require('../config/status');

var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);

var _ProductPicture = require('./../models/ProductPicture'); var _ProductPicture2 = _interopRequireDefault(_ProductPicture);

class ProductController {

  // Create
  async create(req, res) {
    try {
      const product = await _Product2.default.create(req.body)

      const { name, brand, model, price, description, color, weight, dimensions } = product

      return res.status(_status.SUCCESS).json({
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
      return res.status(_status.BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // List All
  async listAll(req, res) {
    const products = await _Product2.default.findAll({
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
      order: [['id', 'DESC'], [_ProductPicture2.default, 'id', 'DESC']],
      include: {
        model: _ProductPicture2.default,
        attributes: ['filename', 'url']
      }
    });
    return res.status(_status.SUCCESS).json(products);
  }
  // List by id
  async listById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(_status.BAD_REQUEST).json({
          error: "ID not founded"
        });
      }

      const product = await _Product2.default.findByPk(id, {
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
        order: [['id', 'DESC'], [_ProductPicture2.default, 'id', 'DESC']],
        include: {
          model: _ProductPicture2.default,
          attributes: ['filename', 'url']
        }
      });

      if (!product) {
        return res.status(_status.BAD_REQUEST).json({
          error: "Product not founded"
        });
      }


      return res.status(_status.SUCCESS).json(product);

    } catch (err) {
      return res.status(_status.BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(_status.BAD_REQUEST).json({
          error: "ID not founded"
        });
      }

      const product = await _Product2.default.findByPk(id);

      if (!product) {
        return res.status(_status.BAD_REQUEST).json({
          error: "Product not founded"
        });
      }

      const newProduct = await product.update(req.body);


      return res.status(_status.SUCCESS).json(newProduct);

    } catch (err) {
      return res.status(_status.BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(_status.BAD_REQUEST).json({
          error: "ID not founded"
        });
      }

      const product = await _Product2.default.findByPk(id);

      if (!product) {
        return res.status(_status.BAD_REQUEST).json({
          error: "Product not founded"
        });
      }

      await product.destroy()


      return res.status(_status.SUCCESS).send({
        msg: 'product deleted successfully'
      });

    } catch (err) {
      return res.status(_status.BAD_REQUEST).send({
        errors: err.errors.map((e) => e.message)
      });
    }
  }
}

exports. default = new ProductController();
