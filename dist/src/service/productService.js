"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../enitity/product");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await product_1.Product.find().populate('category', 'name');
            return products;
        };
        this.add = async (product) => {
            await product_1.Product.create(product);
        };
        this.delete = async (id) => {
            await product_1.Product.findByIdAndDelete(id);
        };
        this.findById = async (id) => {
            return (await product_1.Product.findOne({ _id: id }));
        };
        this.updateOne = async (idSkin, newSkin) => {
            await product_1.Product.updateOne({ _id: idSkin }, { $set: newSkin });
        };
        this.searchAll = async (regex) => {
            let search = await product_1.Product.find({ "name": regex });
            return search;
        };
        this.decreaseAll = async () => {
            let decrease = await product_1.Product.find().sort({ price: -1 });
            return decrease;
        };
        this.ascendingAll = async () => {
            let ascending = await product_1.Product.find().sort({ price: 1 });
            return ascending;
        };
        this.hoaquaAll = async (product) => {
            let hoaqua = await product_1.Product.find({ "category": product });
            return hoaqua;
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map