import { Router } from 'express';

import productController from '../controllers/Product';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', productController.listAll);
router.get('/:id/', productController.listById);
router.post('/', loginRequired, productController.create);
router.put('/:id/', loginRequired, productController.update);
router.delete('/:id/', loginRequired, productController.delete);

export default router;
