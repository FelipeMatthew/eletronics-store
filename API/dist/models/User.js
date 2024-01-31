"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _UsersPicture = require('../models/UsersPicture'); var _UsersPicture2 = _interopRequireDefault(_UsersPicture);

// Sequelize usa a biblioteca do validator
 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name needs to have between 3 - 255 letters',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      // Só vai aparecer no sistema virtualmente, nao vai ser um campo required
      password: {
        type: _sequelize2.default.VIRTUAL,
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
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }
  static associate(models) {
    this.hasMany(models.UsersPicture, { foreignKey: 'user_id' })
  }
  checkPassword(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;


//
