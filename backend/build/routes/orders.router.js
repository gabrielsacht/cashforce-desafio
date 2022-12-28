"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_controller_1 = __importDefault(require("../controllers/orders.controller"));
const router = (0, express_1.Router)();
const orders = new orders_controller_1.default();
router.get('/', orders.getOrdersDetailed);
exports.default = router;
