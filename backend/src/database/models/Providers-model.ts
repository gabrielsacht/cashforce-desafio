import { Model, INTEGER, STRING, DECIMAL, DATE, TINYINT } from 'sequelize';
import db from '.';

class Providers extends Model {
  declare id: number;
  declare name: string;
  declare tradingName: string;
  declare cashforceTax: string;
  declare responsibleName: string;
  declare responsibleEmail: string;
  declare responsiblePosition: string;
  declare responsiblePhone: string;
  declare responsibleMobile: string;
  declare website: string;
  declare postalCode: string;
  declare address: string;
  declare number: string;
  declare complement: string;
  declare neighborhood: string;
  declare city: string;
  declare state: string;
  declare bank: string;
  declare bankAgency: string;
  declare account: string;
  declare documents: string;
  declare phoneNumber: string;
  declare situation: string;
  declare situationDate: string;
  declare createdAt: string;
  declare updatedAt: string;
  declare cnpjId: number;
  declare email: string;
}
Providers.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER
  },
  name: {
    allowNull: false,
    type: STRING
  },
  tradingName: {
    type: STRING,
    defaultValue: null,
  },
  cashforceTax: {
    type: STRING,
    defaultValue: null,
  },
  responsibleName: {
    type: STRING,
    defaultValue: null,
  },
  responsibleEmail: {
    type: STRING,
    defaultValue: null,
  },
  responsiblePosition: {
    type: STRING,
    defaultValue: null,
  },
  responsiblePhone: {
    type: STRING,
    defaultValue: null,
  },
  responsibleMobile: {
    type: STRING,
    defaultValue: null,
  },
  website: {
    type: STRING,
    defaultValue: null
  },
  postalCode: {
    type: STRING,
    defaultValue: null,
  },
  address: {
    type: STRING,
    defaultValue: null
  },
  number: {
    type: STRING,
    defaultValue: null
  },
  complement: {
    type: STRING,
    defaultValue: null
  },
  neighborhood: {
    type: STRING,
    defaultValue: null
  },
  city: {
    type: STRING,
    defaultValue: null
  },
  state: {
    type: STRING,
    defaultValue: null
  },
  bank: {
    type: STRING,
    defaultValue: null
  },
  bankAgency: {
    type: STRING,
    defaultValue: null,
  },
  account: {
    type: STRING,
    defaultValue: null
  },
  documents: {
    type: STRING,
    defaultValue: null
  },
  phoneNumber: {
    type: STRING,
    defaultValue: null,
  },
  
  situation: {
    type: STRING,
    defaultValue: null
  },
  situationDate: {
    type: STRING,
    defaultValue: null,
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
  email: {
    type: STRING,
    defaultValue: null
  },
}, {
  sequelize: db,
  modelName: 'providers',
  underscored: true,
  timestamps: false,
});

export default Providers;