"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _status = require('../config/status');
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    if(!email || !password) {
      return res.status(_status.BAD_REQUEST).json({ error: ['Invalid credentials']});
    }

    const user = await _User2.default.findOne({ where: { email }})

    if(!user) {
      return res.status(_status.BAD_REQUEST).json({ error: ['User not founded']});
    }

    // Pega a função no model de validação do hash com o cadastrado
    if(!(await user.checkPassword(password))) {
      return res.status(_status.BAD_REQUEST).json({ error: ['invalid password']});
    }

    const { id } = user

    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });

    return res.status(_status.SUCCESS).json({ token, user: { name: user.name, id, email } });
  }
}

exports. default = new TokenController();
