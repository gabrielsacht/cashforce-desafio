import { Model, INTEGER, STRING, DECIMAL, DATE, TINYINT } from 'sequelize';
import db from '.';
import Cnpjs from './Cnpjs-model';
import Users from './Users-model';
import Buyers from './Buyers-model';
import Providers from './Providers-model';

class Orders extends Model {
declare id: number;
declare orderNfId: string;
declare orderNumber: string;
declare orderPath: string;
declare orderFileName: string;
declare orderOriginalName: string;
declare emissionDate: string;
declare pdfFile: string;
declare emitedTo: string;
declare nNf: string;
declare CTE: string;
declare value: string;
declare createdAt: string;
declare updatedAt: string;
declare cnpjId: number;
declare userId: number;
declare buyerId: number;
declare providerId: number;
declare orderStatusBuyer: string;
declare orderStatusProvider: string;
declare deliveryReceipt: string;
declare cargoPackingList: string;
declare deliveryCtrc: string;
}
Orders.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER
  },
  orderNfId: {
    allowNull: false,
    type: STRING,
  },
  orderNumber: {
    allowNull: false,
    type: STRING,
  },
  orderPath: {
    type: STRING,
    defaultValue: null,
  },
  orderFileName: {
    type: STRING,
    defaultValue: null,
  },
  orderOriginalName: {
    type: STRING,
    defaultValue: null,
  },
  emissionDate: {
    type: STRING,
    defaultValue: null,
  },
  pdfFile: {
    type: STRING,
    defaultValue: null,
  },
  emitedTo: {
    type: STRING,
    allowNull: false,
  },
  nNf: {
    type: STRING,
    defaultValue: null,
  },
  cte: {
    type: STRING,
    defaultValue: null,
  },
  value: {
    type: STRING,
    defaultValue: null
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
  cnpjId: {
    type: INTEGER,
    defaultValue: null,
  },
  userId: {
    type: INTEGER,
    defaultValue: null,
  },
  buyerId: {
    type: INTEGER,
    defaultValue: null,
  },
  providerId: {
    type: INTEGER,
    defaultValue: null,
  },
  orderStatusBuyer: {
    type: STRING,
    defaultValue: '0',
  },
  orderStatusProvider: {
    type: STRING,
    defaultValue: '0',
  },
  deliveryReceipt: {
    type: STRING,
    defaultValue: null,
  },
  cargoPackingList: {
    type: STRING,
    defaultValue: null,
  },
  deliveryCtrc: {
    type: STRING,
    defaultValue: null,
  },
}, {
  sequelize: db,
  modelName: 'orders',
  underscored: true,
  timestamps: false,
});

// cnpjs, users, buyers e providers

Cnpjs.hasMany(Orders, { foreignKey: 'cnpjId', as: 'cnpjn' });
Users.hasMany(Orders, { foreignKey: 'userId', as: 'user' });
Buyers.hasMany(Orders, { foreignKey: 'buyerId', as: 'buyer' });
Providers.hasMany(Orders, { foreignKey: 'providerId', as: 'provider' });

Orders.belongsTo(Cnpjs, { foreignKey: 'cnpjId', as: 'cnpjn' });
Orders.belongsTo(Users, { foreignKey: 'userId', as: 'user' });
Orders.belongsTo(Buyers, { foreignKey: 'buyerId', as: 'buyer' });
Orders.belongsTo(Providers, { foreignKey: 'providerId', as: 'provider' });



export default Orders;