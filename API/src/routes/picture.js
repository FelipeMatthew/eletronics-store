import { Router } from 'express';

import pictureController from '../controllers/Picture';

const router = new Router();

router.post('/', pictureController.create);

export default router;
