import { SUCCESS } from '../config/status';

import Product from '../models/Product';

class HomeController {
  async index(req, res) {
    const newProduct = await Product.create({
      name: 'Iphone 14 pro max',
      brand: 'APPLE',
      model: '14 pro max',
      price: 2099.99,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      color: 'purple',
      weight: 30.2,
      dimensions: '32 X 9',

    });
    res.status(SUCCESS).json(newProduct);
  }
}

export default new HomeController();
