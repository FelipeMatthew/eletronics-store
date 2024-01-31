import { BAD_REQUEST, SUCCESS } from '../config/status';
import jwt from 'jsonwebtoken'

import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    if(!email || !password) {
      return res.status(BAD_REQUEST).json({ error: ['Invalid credentials']});
    }

    const user = await User.findOne({ where: { email }})

    if(!user) {
      return res.status(BAD_REQUEST).json({ error: ['User not founded']});
    }

    // Pega a função no model de validação do hash com o cadastrado
    if(!(await user.checkPassword(password))) {
      return res.status(BAD_REQUEST).json({ error: ['invalid password']});
    }

    const { id } = user

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });

    return res.status(SUCCESS).json({ token, user: { name: user.name, id, email } });
  }
}

export default new TokenController();
