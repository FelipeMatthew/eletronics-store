import { Router } from 'express';

import userController from '../controllers/User';

const router = new Router();

router.get('/', userController.listAll);
router.get('/:id/', userController.listById);
router.post('/', userController.create);
router.put('/:id/', userController.update);
router.delete('/:id/', userController.delete);

export default router;
