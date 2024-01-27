import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

import Product from './Product';

export default class ProductPicture extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Empty field'
          },
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Empty field'
          },
        }
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        },
      },
    }, {
      sequelize,
      tableName: 'product-pictures'
    });
    return this;
  }

}

//
