"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _status = require('../config/status');

var _ProductPicture = require('../models/ProductPicture'); var _ProductPicture2 = _interopRequireDefault(_ProductPicture);

var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _multer3 = require('../config/multer');


const upload = _multer2.default.call(void 0, _multer3.multerProduct).single('file')
class ProductPictureController {
   create(req, res) {
    return upload(req, res, async (err) => {
      if(err) {
        return res.status(_status.BAD_REQUEST).json({ errors: err.code })
      }

      try {
        const { originalname, filename } = req.file;
        const { product_id } = req.body;

        const picture = await _ProductPicture2.default.create({ originalname, filename, product_id })

        return res.status(_status.SUCCESS).json(picture);
      }catch(err) {
        return res.status(_status.BAD_REQUEST).json({
          errors: "Product don't exist"
        });
      }

    });

  }
}

exports. default = new ProductPictureController();
