import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name must have between 3 to 255 letters'
          },
        }
      },
      brand: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      model: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      price: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Incorrect number type'
          }
        }
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      color: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Incorrect number type'
          }
        }
      },
      dimensions: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}

//
