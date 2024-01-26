import multer from "multer";
import { extname, resolve } from 'path';

const randomNum = () => {
  Math.floor(Math.random() * 10000 + 10000)
}

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      // Data com a extensão do arquivo
      cb(null, `${Date.now()}_${extname(file.originalname)}`)
    }
  })
}
