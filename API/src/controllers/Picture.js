import { BAD_REQUEST, SUCCESS } from '../config/status';

import ProductPicture from '../models/ProductPicture'

import multer from 'multer';

import multerConfig from '../config/multer'
import ProductPicture from '../models/ProductPicture';

const upload = multer(multerConfig).single('file')
class PictureController {
   create(req, res) {
    return upload(req, res, async (err) => {
      if(err) {
        return res.status(BAD_REQUEST).json({ errors: err.code })
      }

      const { originalname, filename } = req.file;
      const { product_id } = req.body;

      const picture = await ProductPicture.create({ originalname, filename, product_id })

      return res.status(SUCCESS).json(picture);
    });

  }
}

export default new PictureController();
