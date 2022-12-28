"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Providers extends sequelize_1.Model {
}
Providers.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.INTEGER
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING
    },
    tradingName: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    cashforceTax: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    responsibleName: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    responsibleEmail: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    responsiblePosition: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    responsiblePhone: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    responsibleMobile: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    website: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    postalCode: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    address: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    number: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    complement: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    neighborhood: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    city: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    state: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    bank: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    bankAgency: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    account: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    documents: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    phoneNumber: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    situation: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    situationDate: {
        type: sequelize_1.STRING,
        defaultValue: null,
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
    email: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
}, {
    sequelize: _1.default,
    modelName: 'providers',
    underscored: true,
    timestamps: false,
});
exports.default = Providers;
