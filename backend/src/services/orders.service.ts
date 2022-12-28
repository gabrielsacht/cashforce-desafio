import Orders from "../database/models/Orders-model";
import Cnpjs from "../database/models/Cnpjs-model";
import Buyers from "../database/models/Buyers-model";
import Users from "../database/models/Users-model";
import Providers from "../database/models/Providers-model";

export default class OrdersService {
  public async getOrdersDetail () {
    const orders = await Orders.findAll({
      attributes: ['orderNumber', 'emissionDate', 'value', 'orderStatusBuyer'],
      include: [
        { model: Buyers, as: 'buyer', attributes: ['name'] },
        { model: Providers, as: 'provider', attributes: ['name'] }],
    })

    return orders;
  }
}