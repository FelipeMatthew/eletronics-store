import { Router } from 'express';

import pictureController from '../controllers/Picture';
import loginRequired from '../middlewares/loginRequired'

const router = new Router();

router.post('/', loginRequired, pictureController.create);

export default router;
