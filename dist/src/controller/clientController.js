"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
class ClientController {
    constructor() {
        this.showHomeClient = async (req, res) => {
            if (req.session['user']) {
                let user = req.session['user'];
                let idUser = user._id;
                let listProduct = await this.productService.getAll();
                res.render('client/abc', { products: listProduct });
            }
            else {
                res.redirect(301, '/users/login');
            }
        };
        this.productService = productService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new ClientController();
//# sourceMappingURL=clientController.js.map