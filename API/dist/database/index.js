"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

// Models
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);
var _ProductPicture = require('../models/ProductPicture'); var _ProductPicture2 = _interopRequireDefault(_ProductPicture);
var _UsersPicture = require('../models/UsersPicture'); var _UsersPicture2 = _interopRequireDefault(_UsersPicture);


const models = [_Product2.default, _User2.default, _ProductPicture2.default, _UsersPicture2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

//  Para cada model irá realizar uma dbConnection
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
