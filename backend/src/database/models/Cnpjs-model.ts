import { Model, INTEGER, STRING, DECIMAL, DATE, TINYINT } from 'sequelize';
import db from '.';

class Cnpjs extends Model {
  declare id: number;
  declare cnpj: string;
  declare companyType: string;
  declare createdAt: string;
  declare updatedAt: string;
}
Cnpjs.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER
  },
  cnpj: {
    allowNull: false,
    type: STRING
  },
  companyType: {
    allowNull: false,
    type: STRING,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'cnpjs',
  underscored: true,
  timestamps: false,
});

export default Cnpjs;