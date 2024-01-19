import express from 'express';
import homeRoutes from './src/routes/home';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.port = 3000;
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

// Export only the app
export default new App().app;
