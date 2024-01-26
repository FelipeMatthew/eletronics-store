import { BAD_REQUEST, SUCCESS } from '../config/status';

import multer from 'multer';

import multerConfig from '../config/multer'

const upload = multer(multerConfig).single('file')
class PictureController {
  async create(req, res) {
    return upload(req, res, (err) => {
      if(err) {
        return res.status(BAD_REQUEST).json({ errors: err.code })
      }
      return res.status(SUCCESS).json(req.file);
    })

  }
}

export default new PictureController();
