"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class OrderPortions extends sequelize_1.Model {
}
OrderPortions.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.INTEGER
    },
    tax: {
        allowNull: false,
        type: sequelize_1.STRING
    },
    tariff: {
        allowNull: false,
        type: sequelize_1.STRING
    },
    adValorem: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    float: {
        allowNull: false,
        type: sequelize_1.STRING
    },
    iof: {
        allowNull: false,
        type: sequelize_1.STRING
    },
    expiresIn: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
    paymentStatusSponsor: {
        type: sequelize_1.TINYINT,
        defaultValue: 0,
    },
    paymentStatusProvider: {
        type: sequelize_1.TINYINT,
        defaultValue: 0,
    },
    createdAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
    orderId: {
        type: sequelize_1.INTEGER,
        defaultValue: null,
    },
    sponsorId: {
        type: sequelize_1.INTEGER,
        defaultValue: null,
    },
}, {
    sequelize: _1.default,
    modelName: 'orderportions',
    underscored: true,
    timestamps: false,
});
exports.default = OrderPortions;
