import { SUCCESS } from '../config/status';

import Product from '../models/Product';

class PictureController {
  async create(req, res) {


    res.status(SUCCESS).json(req.file);
  }
}

export default new PictureController();
