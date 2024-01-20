import { SUCCESS, BAD_REQUEST } from '../config/status';

import User from '../models/User';

class UserController {
  // Create
  async create(req, res) {
    try {
      const newUser = await User.create({
        name: 'administrator',
        email: 'admin1in1istrator@gmail.com',
        password: '123456',

      });
      res.status(SUCCESS).json(newUser);
    } catch (err) {
      return res.status(BAD_REQUEST).json({
        errors:err.errors.map((e) => e.message)});
    }
  }
  // Show

  // Update

  // Delete
}

export default new UserController();
