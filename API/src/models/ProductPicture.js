import Sequelize, { Model } from 'sequelize';

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
    }, {
      sequelize,
      tableName: 'product-pictures'
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id' })
  }
}

//
