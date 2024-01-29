import { BAD_REQUEST, SUCCESS } from '../config/status';

import ProductPicture from '../models/ProductPicture'

import multer from 'multer';

import { multerUser } from '../config/multer'
import UserPicture from '../models/UsersPicture'
const upload = multer(multerUser).single('file')
class UsersPictureController {
   create(req, res) {
    return upload(req, res, async (err) => {
      if(err) {
        return res.status(BAD_REQUEST).json({ errors: err.code })
      }

      try {
        const { originalname, filename } = req.file;
        const { users_id } = req.body;

        if(!users_id) {
          return res.status(BAD_REQUEST).json({ errors: 'User not founded'  })
        }

        const picture = await UserPicture.create({ originalname, filename, users_id })

        return res.status(SUCCESS).json(picture);
      }catch(err) {
        return res.status(BAD_REQUEST).json({
          errors: "User don't exist"
        });
      }

    });

  }
}

export default new UsersPictureController();
