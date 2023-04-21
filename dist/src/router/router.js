"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const productRouter_1 = __importDefault(require("./productRouter"));
const homeCotroller_1 = __importDefault(require("../controller/homeCotroller"));
const errorController_1 = __importDefault(require("../controller/errorController"));
const router = (0, express_1.Router)();
router.use('/products', productRouter_1.default);
router.get('/users/login', userController_1.default.showFormLogin);
router.get('/users/logout', userController_1.default.logout);
router.post('/users/login', userController_1.default.login);
router.get('/users/register', userController_1.default.showFormRegister);
router.post('/users/register', userController_1.default.register);
router.get('/', homeCotroller_1.default.showHome);
router.get('/users/error', errorController_1.default.showHomeError);
router.get('/users/success', errorController_1.default.showHomeSuccess);
exports.default = router;
//# sourceMappingURL=router.js.map