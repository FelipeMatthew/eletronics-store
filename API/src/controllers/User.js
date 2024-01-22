import { SUCCESS, BAD_REQUEST } from '../config/status';

import User from '../models/User';

class UserController {
  // Create
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(SUCCESS).json(newUser);
    } catch (err) {
      console.log(err)
      return res.status(BAD_REQUEST).json({
        errors:err.errors.map((e) => e.message)});
    }
  }
  // Show

  // Update

  // Delete
}

export default new UserController();
