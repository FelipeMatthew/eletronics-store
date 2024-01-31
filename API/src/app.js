import dotenv from 'dotenv';
import { resolve } from 'path'

dotenv.config();

// index.js
import './database';

import express from 'express';
import cors from 'cors'
import helmet from 'helmet'

// Routes
import homeRoutes from './routes/home';
import userRoutes from './routes/user';
import tokenRoutes from './routes/token';
import productRoutes from './routes/product';
import productPictureRoutes from './routes/productPicture';
import usersPictureRoutes from './routes/usersPicture';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet())
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
