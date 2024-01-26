import { SUCCESS, BAD_REQUEST } from '../config/status';

import User from '../models/User';

class UserController {
  // Create
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);


      const { id, email, name } = newUser

      return res.json({ id, email, name, msg: 'user created successfully' });

    } catch (err) {
      return res.status(BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // List all
  async listAll(req, res) {
    try {
      const showUsers = await User.findAll({
        attributes: ['id', 'name', 'email']
      });

      if (!showUsers) {
        return res.status(BAD_REQUEST).json({
          error: "User not found"
        })
      }

      return res.status(SUCCESS).json(showUsers);
    } catch (err) {
      return res.status(BAD_REQUEST).send({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // List by id
  async listById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(BAD_REQUEST).json({
        error: "User not found"
      })
    }
  }

  // Update
  async update(req, res) {
    try {
      // Vai passar no middleware e com o token ele já vai saber quem é o user id
      const user = await User.findByPk(req.userId);

      if(!user) {
        return res.status(BAD_REQUEST).json({
          error: "User not exist"
        })
      }

      const newData = await user.update(req.body)

      const { id, email, name } = newData

      return res.json({ id, email, name });

    } catch (e) {
      return res.status(BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if(!user) {
        return res.status(BAD_REQUEST).json({
          error: "User not exist"
        })
      }

      user.destroy();

      return res.json({msg: "User deleted successfully"});

    } catch (e) {
      return res.status(BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }
}

export default new UserController();
