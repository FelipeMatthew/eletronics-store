import { Router } from 'express';

import userController from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/',  loginRequired, userController.listAll);
router.get('/:id/', userController.listById);
router.post('/', userController.create);
router.put('/:id/', userController.update);
router.delete('/:id/', userController.delete);

export default router;
