import { Router } from 'express';

import UsersPicture from '../controllers/UsersPicture';
import loginRequired from '../middlewares/loginRequired'

const router = new Router();

router.post('/', loginRequired, UsersPicture.create);

export default router;
