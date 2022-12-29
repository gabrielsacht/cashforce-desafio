import React from 'react';
import api from '../services/axios'

class Table extends React.Component {
  state = {
    orders: [],
  }

  componentDidMount() {
    this.loadOrders();
  }

  loadOrders = async () => {
    try {
      const response = await api.get('/orders');
      console.log(response);
      const orders = response.data;

      this.setState({ orders });
    } catch (error) {
      console.log({message: 'erro ao comunicar com o backend', error})
    }
    
  }

  getStatus = (orderStatusNum) =>{
    const status = [
      'Pendente de confirmação',
      'Pedido confirmado',
      'Não reconhece o pedido',
      'Mercadoria não recebida',
      'Recebida com avaria',
      'Devolvida',
      'Recebida com devolução parcial',
      'Recebida e confirmada',
      'Pagamento Autorizado'
    ];

    return status[orderStatusNum]

  }
  render() {
    const { orders } = this.state;
    return (
      <><div>
        <div>
          <h2>Notas fiscais</h2>
        </div>
        <div>
          <p>Visualize as notas fiscais que você tem</p>
        </div>
      </div><table className="table">
          <thead>
            <tr className="table-row-first">
              <th>NOTA FISCAL</th>
              <th>SACADO</th>
              <th>CEDENTE de pagamento</th>
              <th>EMISSÃO</th>
              <th>VALOR</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.lenght !== 0 && (
              orders.map((order) => (
                <tr key={order.orderNumber} className='table-row'>
                  <td>
                    {order.orderNumber}
                  </td>
                  <td>
                    {order.buyer.name}
                  </td>
                  <td>
                    {order.provider.name}
                  </td>
                  <td>
                    {new Date(order.emissionDate).toLocaleDateString()}
                  </td>
                  <td>
                    {Intl.NumberFormat('en-US', {style: 'currency', currency: 'BRL'}).format(order.value) }
                  </td>
                  <td>
                    {this.getStatus(order.orderStatusBuyer)}
                  </td>
                  <td>
                    <button
                      id={order.orderNumber}
                      type="button"
                    >
                      Dados do cedente
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table></>
    );
  }
}

export default Table;