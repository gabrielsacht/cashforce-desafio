"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Users extends sequelize_1.Model {
}
Users.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.INTEGER
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING
    },
    email: {
        allowNull: false,
        type: sequelize_1.STRING
    },
    phoneNumber: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    mobile: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    departament: {
        type: sequelize_1.STRING,
        defaultValue: null
    },
    verificationCode: {
        type: sequelize_1.STRING,
        defaultValue: null,
    },
    emailChecked: {
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
    cashforceAdm: {
        type: sequelize_1.TINYINT,
        defaultValue: 0,
    },
}, {
    sequelize: _1.default,
    modelName: 'users',
    underscored: true,
    timestamps: false,
});
exports.default = Users;
