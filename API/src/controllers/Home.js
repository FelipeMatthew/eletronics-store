import { SUCCESS } from '../config/status';

import Product from '../models/Product';

class HomeController {
  async index(req, res) {
    res.status(SUCCESS).json('Index');
  }
}

export default new HomeController();
