"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

// index.js
require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

// Routes
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _user = require('./routes/user'); var _user2 = _interopRequireDefault(_user);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);
var _product = require('./routes/product'); var _product2 = _interopRequireDefault(_product);
var _productPicture = require('./routes/productPicture'); var _productPicture2 = _interopRequireDefault(_productPicture);
var _usersPicture = require('./routes/usersPicture'); var _usersPicture2 = _interopRequireDefault(_usersPicture);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use(_helmet2.default.call(void 0, ))
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));

  }

  routes() {
    this.app.use('/', _home2.default);
    this.app.use('/users/', _user2.default);
    this.app.use('/tokens/', _token2.default);
    this.app.use('/products/', _product2.default);
    this.app.use('/productPictures/', _productPicture2.default);
    this.app.use('/usersPictures/', _usersPicture2.default);

  }
}

// Export only the app
exports. default = new App().app;
