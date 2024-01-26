import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// Sequelize usa a biblioteca do validator
export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name needs to have between 3 - 255 letters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email already exist',
        },
        validate: {
          isEmail: {
            msg: 'Email is invalid',
          },

        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      // Só vai aparecer no sistema virtualmente, nao vai ser um campo required
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Pass needs to have between 3 - 255 letters',
          },
        },
      },
    }, {
      sequelize,
    });

    // Antes de salvar a request ele vai fazer a função
    this.addHook('beforeSave', async (user) => {
      // Pega e senha passada e faz hash
      if(user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

//
