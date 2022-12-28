"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Cnpjs extends sequelize_1.Model {
}
Cnpjs.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.INTEGER
    },
    cnpj: {
        allowNull: false,
        type: sequelize_1.STRING
    },
    companyType: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    createdAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'cnpjs',
    underscored: true,
    timestamps: false,
});
exports.default = Cnpjs;
