"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const clientController_1 = __importDefault(require("../controller/clientController"));
const productRouter = (0, express_1.Router)();
productRouter.get('/', productController_1.default.findAll);
productRouter.get('/create', productController_1.default.showFormAdd);
productRouter.get('/decrease', productController_1.default.decreaseProduct);
productRouter.get('/ascending', productController_1.default.ascendingProduct);
productRouter.get('/hoaqua', productController_1.default.hoaquaProduct);
productRouter.post('/create', productController_1.default.addProduct);
productRouter.post('/update', productController_1.default.editProduct);
productRouter.post('/search', productController_1.default.searchProduct);
productRouter.get('/delete/:id', productController_1.default.deleteProduct);
productRouter.get('/update/:id', productController_1.default.showUpdateProduct);
productRouter.get('/client', clientController_1.default.showHomeClient);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map