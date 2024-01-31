"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _Product = require('../controllers/Product'); var _Product2 = _interopRequireDefault(_Product);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _Product2.default.listAll);
router.get('/:id/', _Product2.default.listById);
router.post('/', _loginRequired2.default, _Product2.default.create);
router.put('/:id/', _loginRequired2.default, _Product2.default.update);
router.delete('/:id/', _loginRequired2.default, _Product2.default.delete);

exports. default = router;
