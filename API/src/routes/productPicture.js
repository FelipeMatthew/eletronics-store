import { Router } from 'express';

import productPictureController from '../controllers/ProductPicture';
import loginRequired from '../middlewares/loginRequired'

const router = new Router();

router.post('/', loginRequired, productPictureController.create);

export default router;
