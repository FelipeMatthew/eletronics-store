import dotenv from 'dotenv';
import { resolve } from 'path'

dotenv.config();

// index.js
import './src/database';
import express from 'express';

// Routes
import homeRoutes from './src/routes/home';
import userRoutes from './src/routes/user';
import tokenRoutes from './src/routes/token';
import productRoutes from './src/routes/product';
import productPictureRoutes from './src/routes/productPicture';
import usersPictureRoutes from './src/routes/usersPicture';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/products/', productRoutes);
    this.app.use('/productPictures/', productPictureRoutes);
    this.app.use('/usersPictures/', usersPictureRoutes);

  }
}

// Export only the app
export default new App().app;
