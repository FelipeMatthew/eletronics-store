"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const randomNum = () => {
  Math.floor(Math.random() * 10000 + 10000)
}

 const multerProduct = {
  // Aceitar apenas imagens
  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
      return cb(new _multer2.default.MulterError('File extension must be PNG or JPG.'))
    }
    cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images', 'product'));
    },
    filename: (req, file, cb) => {
      // Data com a extensão do arquivo
      cb(null, `${Date.now()}_${_path.extname.call(void 0, file.originalname)}`)
    }
  })
}; exports.multerProduct = multerProduct

 const multerUser = {
  // Aceitar apenas imagens
  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
      return cb(new _multer2.default.MulterError('File extension must be PNG or JPG.'))
    }
    cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images', 'user'));
    },
    filename: (req, file, cb) => {
      // Data com a extensão do arquivo
      cb(null, `${Date.now()}_${_path.extname.call(void 0, file.originalname)}`)
    }
  })
}; exports.multerUser = multerUser
