import { Router } from 'express';

import userController from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.listAll);
// router.get('/:id/', userController.listById);

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
