import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const router = Router();
const orders = new OrderController();

router.get('/', orders.getOrdersDetailed)

export default router;