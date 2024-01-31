"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _status = require('../config/status');

var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);

class HomeController {
  async index(req, res) {
    res.status(_status.SUCCESS).json('Index');
  }
}

exports. default = new HomeController();
