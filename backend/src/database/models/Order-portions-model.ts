import { Model, INTEGER, STRING, DECIMAL, DATE, TINYINT } from 'sequelize';
import db from '.';

class OrderPortions extends Model {
declare id: number;
declare tax: string;
declare tariff: string;
declare adValorem: string;
declare float: string;
declare iof: string;
declare expiresIn: string;
declare paymentStatusSponsor: number;
declare paymentStatusProvider: number;
declare createdAt: string;
declare updatedAt: string;
declare orderId: number;
declare sponsorId: number;
}
OrderPortions.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER
  },
  tax: {
    allowNull: false,
    type: STRING
  },
  tariff: {
    allowNull: false,
    type: STRING
  },
  adValorem: {
    allowNull: false,
    type: STRING,
  },
  float: {
    allowNull: false,
    type: STRING
  },
  iof: {
    allowNull: false,
    type: STRING
  },
  expiresIn: {
    type: DATE,
    allowNull: false,
  },
  paymentStatusSponsor: {
    type: TINYINT,
    defaultValue: 0,
  },
  paymentStatusProvider: {
    type: TINYINT,
    defaultValue: 0,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
  orderId: {
    type: INTEGER,
    defaultValue: null,
  },
  sponsorId: {
    type: INTEGER,
    defaultValue: null,
  },
}, {
  sequelize: db,
  modelName: 'orderportions',
  underscored: true,
  timestamps: false,
});

export default OrderPortions;