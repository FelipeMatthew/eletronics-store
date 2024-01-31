"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

var _Product = require('./Product'); var _Product2 = _interopRequireDefault(_Product);

 class ProductPicture extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Empty field'
          },
        }
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Empty field'
          },
        }
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${_appConfig2.default.url}/images/${this.getDataValue('filename')}`
        },
      },
    }, {
      sequelize,
      tableName: 'product-pictures'
    });
    return this;
  }

} exports.default = ProductPicture;

//
