import { SUCCESS, BAD_REQUEST } from '../config/status';

import User from '../models/User';

class UserController {
  // Create
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.status(SUCCESS).json(newUser);
    } catch (err) {
      console.log(err)
      return res.status(BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // List all
  async listAll(req, res) {
    try {
      const showUsers = await User.findAll();

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
      if(!req.params.id) {
        return res.status(BAD_REQUEST).json({
          error: "User not founded"
        })
      }

      const user = await User.findByPk(req.params.id);

      if(!user) {
        return res.status(BAD_REQUEST).json({
          error: "User not exist"
        })
      }

      const newData = await user.update(req.body)

      return res.json(newData);

    } catch (e) {
      return res.status(BAD_REQUEST).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if(!req.params.id) {
        return res.status(BAD_REQUEST).json({
          error: "User not founded"
        })
      }

      const user = await User.findByPk(req.params.id);

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
