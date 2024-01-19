import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      brand: Sequelize.STRING,
      model: Sequelize.STRING,
      price: Sequelize.FLOAT,
      description: Sequelize.STRING,
      color: Sequelize.STRING,
      weight: Sequelize.FLOAT,
      dimensions: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}

//
