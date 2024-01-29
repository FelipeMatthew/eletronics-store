import multer from "multer";
import { extname, resolve } from 'path';

const randomNum = () => {
  Math.floor(Math.random() * 10000 + 10000)
}

export const multerProduct = {
  // Aceitar apenas imagens
  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
      return cb(new multer.MulterError('File extension must be PNG or JPG.'))
    }
    cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images', 'product'));
    },
    filename: (req, file, cb) => {
      // Data com a extensão do arquivo
      cb(null, `${Date.now()}_${extname(file.originalname)}`)
    }
  })
}

export const multerUser = {
  // Aceitar apenas imagens
  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
      return cb(new multer.MulterError('File extension must be PNG or JPG.'))
    }
    cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images', 'user'));
    },
    filename: (req, file, cb) => {
      // Data com a extensão do arquivo
      cb(null, `${Date.now()}_${extname(file.originalname)}`)
    }
  })
}
