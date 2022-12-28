"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orders_model_1 = __importDefault(require("../database/models/Orders-model"));
const Buyers_model_1 = __importDefault(require("../database/models/Buyers-model"));
const Providers_model_1 = __importDefault(require("../database/models/Providers-model"));
class OrdersService {
    getOrdersDetail() {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield Orders_model_1.default.findAll({
                attributes: ['orderNumber', 'emissionDate', 'value', 'orderStatusBuyer'],
                include: [
                    { model: Buyers_model_1.default, as: 'buyer', attributes: ['name'] },
                    { model: Providers_model_1.default, as: 'provider', attributes: ['name'] }
                ],
            });
            return orders;
        });
    }
}
exports.default = OrdersService;
