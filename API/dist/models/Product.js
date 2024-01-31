"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _ProductPicture = require('../models/ProductPicture'); var _ProductPicture2 = _interopRequireDefault(_ProductPicture);

 class Product extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name must have between 3 to 255 letters'
          },
        }
      },
      brand: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      model: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      price: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Incorrect number type'
          }
        }
      },
      description: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      color: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      weight: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Incorrect number type'
          }
        }
      },
      dimensions: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
  static associate(models) {
    this.hasMany(models.ProductPicture, { foreignKey: 'product_id' })
  }
} exports.default = Product;

//
