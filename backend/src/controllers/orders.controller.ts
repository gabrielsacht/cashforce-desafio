import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrderController {
  private orderService = new OrdersService();

  public getOrdersDetailed = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getOrdersDetail();

    res.status(200).json(orders)
  }
}