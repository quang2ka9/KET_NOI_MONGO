"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
const escapeRegExp_1 = require("typeorm/util/escapeRegExp");
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            if (req.session['user']) {
                let user = req.session['user'];
                let idUser = user._id;
                let listProduct = await this.productService.getAll();
                res.render('index', { products: listProduct });
            }
            else {
                res.redirect(301, '/users/login');
            }
        };
        this.showFormAdd = async (req, res) => {
            let listCategory = await this.categoryService.getAll();
            res.render('products/create', { categories: listCategory });
        };
        this.addProduct = (req, res) => {
            console.log(req.body);
            this.productService.add(req.body);
            res.redirect(301, '/products');
        };
        this.deleteProduct = async (req, res) => {
            let id = req.params.id;
            await this.productService.delete(id);
            res.redirect('/products');
        };
        this.showUpdateProduct = async (req, res) => {
            let id = req.params.id;
            let listCategory = await this.categoryService.getAll();
            let products = await this.productService.findById(id);
            res.render('products/update', { products: products, categories: listCategory });
        };
        this.editProduct = async (req, res) => {
            let id = req.body.id;
            let product = req.body;
            await this.productService.updateOne(id, product);
            res.redirect('/products');
        };
        this.searchProduct = async (req, res) => {
            const regex = new RegExp((0, escapeRegExp_1.escapeRegExp)(req.body.search));
            let listProduct = await this.productService.searchAll(regex);
            res.render('products/search', { products: listProduct });
        };
        this.decreaseProduct = async (req, res) => {
            let listProduct = await this.productService.decreaseAll();
            res.render('products/decrease', { products: listProduct });
        };
        this.ascendingProduct = async (req, res) => {
            let listProduct = await this.productService.ascendingAll();
            res.render('products/decrease', { products: listProduct });
        };
        this.hoaquaProduct = async (req, res) => {
            let listCategory = await this.categoryService.getAll(req.params.id);
            let products = listCategory[0];
            let product = products.id;
            let listProduct = await this.productService.hoaquaAll(product);
            res.render('products/hoaqua', { products: listProduct });
        };
        this.productService = productService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map