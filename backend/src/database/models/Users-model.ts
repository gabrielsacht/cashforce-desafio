import { Model, INTEGER, STRING, DECIMAL, DATE, TINYINT } from 'sequelize';
import db from '.';

class Users extends Model {
  declare id: number;
  declare name: string; 
  declare email: string; 
  declare phoneNumber: string;
  declare mobile: string;
  declare departament: string;
  declare verificationCode: string;
  declare emailChecked: number; 
  declare createdAt: string;
  declare updatedAt: string;
  declare cashforceAdm: number;
}
Users.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER
  },
  name: {
    allowNull: false,
    type: STRING
  },
  email: {
    allowNull: false,
    type: STRING
  },
  phoneNumber: {
    type: STRING,
    defaultValue: null,
  },
  mobile: {
    type: STRING,
    defaultValue: null
  },
  departament: {
    type: STRING,
    defaultValue: null
  },
  verificationCode: {
    type: STRING,
    defaultValue: null,
  },
  emailChecked: {
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
  cashforceAdm: {
    type: TINYINT,
    defaultValue: 0,
  },
}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  timestamps: false,
});

export default Users;