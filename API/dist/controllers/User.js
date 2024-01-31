"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _status = require('../config/status');

var _UsersPicture = require('../models/UsersPicture'); var _UsersPicture2 = _interopRequireDefault(_UsersPicture);

var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  // Create
  async create(req, res) {
    try {
      const newUser = await _User2.default.create(req.body);


      const { id, email, name } = newUser

      return res.json({ id, email, name, msg: 'user created successfully' });

    } catch (err) {
      return res.status(_status.BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // List all
  async listAll(req, res) {
    try {
      const showUsers = await _User2.default.findAll({
        attributes: [
          "id",
          "name",
          "email",

        ],
        order: [['id', 'DESC'], [_UsersPicture2.default, 'id', 'DESC']],
        include: {
          model: _UsersPicture2.default,
          attributes: ['filename', 'url']
        }
      });

      if (!showUsers) {
        return res.status(_status.BAD_REQUEST).json({
          error: "User not found"
        })
      }

      return res.status(_status.SUCCESS).json(showUsers);
    } catch (err) {
      return res.status(_status.BAD_REQUEST).send({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // List by id
  async listById(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(_status.BAD_REQUEST).json({
        error: "User not found"
      })
    }
  }

  // Update
  async update(req, res) {
    try {
      // Vai passar no middleware e com o token ele já vai saber quem é o user id
      const user = await _User2.default.findByPk(req.userId);

      if(!user) {
        return res.status(_status.BAD_REQUEST).json({
          error: "User not exist"
        })
      }

      const newData = await user.update(req.body)

      const { id, email, name } = newData

      return res.json({ id, email, name });

    } catch (e) {
      return res.status(_status.BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if(!user) {
        return res.status(_status.BAD_REQUEST).json({
          error: "User not exist"
        })
      }

      user.destroy();

      return res.json({msg: "User deleted successfully"});

    } catch (e) {
      return res.status(_status.BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }
}

exports. default = new UserController();
