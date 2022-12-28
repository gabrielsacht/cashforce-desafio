"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Cnpjs_model_1 = __importDefault(require("./Cnpjs-model"));
const Users_model_1 = __importDefault(require("./Users-model"));
const Buyers_model_1 = __importDefault(require("./Buyers-model"));
const Providers_model_1 = __importDefault(require("./Providers-model"));
class Orders extends sequelize_1.Model {
}
Orders.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.INTEGER
    },
    orderNfId: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    orderNumber: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    orderPath: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    orderFileName: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    orderOriginalName: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    emissionDate: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    pdfFile: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    emitedTo: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    nNf: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    cte: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    value: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    createdAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
    cnpjId: {
        type: sequelize_1.INTEGER,
        defaultValue: null,
    },
    userId: {
        type: sequelize_1.INTEGER,
        defaultValue: null,
    },
    buyerId: {
        type: sequelize_1.INTEGER,
        defaultValue: null,
    },
    providerId: {
        type: sequelize_1.INTEGER,
        defaultValue: null,
    },
    orderStatusBuyer: {
        type: sequelize_1.STRING,
        defaultValue: '0',
    },
    orderStatusProvider: {
        type: sequelize_1.STRING,
        defaultValue: '0',
    },
    deliveryReceipt: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    cargoPackingList: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    deliveryCtrc: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
}, {
    sequelize: _1.default,
    modelName: 'orders',
    underscored: true,
    timestamps: false,
});
// cnpjs, users, buyers e providers
Cnpjs_model_1.default.hasMany(Orders, { foreignKey: 'cnpjId', as: 'cnpjn' });
Users_model_1.default.hasMany(Orders, { foreignKey: 'userId', as: 'user' });
Buyers_model_1.default.hasMany(Orders, { foreignKey: 'buyerId', as: 'buyer' });
Providers_model_1.default.hasMany(Orders, { foreignKey: 'providerId', as: 'provider' });
Orders.belongsTo(Cnpjs_model_1.default, { foreignKey: 'cnpjId', as: 'cnpjn' });
Orders.belongsTo(Users_model_1.default, { foreignKey: 'userId', as: 'user' });
Orders.belongsTo(Buyers_model_1.default, { foreignKey: 'buyerId', as: 'buyer' });
Orders.belongsTo(Providers_model_1.default, { foreignKey: 'providerId', as: 'provider' });
exports.default = Orders;
