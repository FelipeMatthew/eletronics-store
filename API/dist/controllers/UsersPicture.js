"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _status = require('../config/status');

var _ProductPicture = require('../models/ProductPicture'); var _ProductPicture2 = _interopRequireDefault(_ProductPicture);

var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _multer3 = require('../config/multer');
var _UsersPicture = require('../models/UsersPicture'); var _UsersPicture2 = _interopRequireDefault(_UsersPicture);

const upload = _multer2.default.call(void 0, _multer3.multerUser).single('file');
class UsersPictureController {
   create(req, res) {
    return upload(req, res, async (err) => {
      if(err) {
        return res.status(_status.BAD_REQUEST).json({ errors: err.code })
      }

      try {
        const { originalname, filename } = req.file;
        const { user_id } = await req.body;

        if(!user_id) {
          return res.status(_status.BAD_REQUEST).json({ errors: 'User not founded'  })
        }

        const picture = await _UsersPicture2.default.create({ originalname, filename, user_id })

        return res.status(_status.SUCCESS).json(picture);
      }catch(err) {
        return res.status(_status.BAD_REQUEST).json({
          errors: "User don't exist"
        });
      }

    });

  }
}

exports. default = new UsersPictureController();
