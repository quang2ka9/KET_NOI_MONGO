import {Request, Response} from "express";
import productService from "../service/productService";
import categoryService from "../service/CategoryService";
import {escapeRegExp} from "typeorm/util/escapeRegExp";

class ProductController {
    private productService;
    private categoryService;

    constructor() {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    findAll = async (req: Request, res: Response) => {
        if(req.session['user']) {
            let user = req.session['user'];
            let idUser = user._id;
            let listProduct = await this.productService.getAll();
            res.render('index', {products: listProduct});
        } else {
            res.redirect(301, '/users/login');
        }
    }

    showFormAdd = async (req: Request, res: Response) => {
        let listCategory = await this.categoryService.getAll();
        res.render('products/create', {categories: listCategory})
    }

    addProduct = (req: Request, res: Response) => {
        console.log(req.body)
        this.productService.add(req.body);
        res.redirect(301, '/products')
    }

    deleteProduct = async (req: Request, res: Response) => {
        let id = req.params.id
         await this.productService.delete(id);
        res.redirect('/products')
    }

    showUpdateProduct = async (req: Request, res: Response) => {
        let id = req.params.id;
        let listCategory = await this.categoryService.getAll();
        let products = await this.productService.findById(id);
        res.render('products/update', {products: products, categories: listCategory});
    }
    editProduct = async (req: Request, res: Response) => {
        let id = req.body.id
        let product = req.body
        await this.productService.updateOne(id,product);
        res.redirect('/products')
    }

    searchProduct = async (req: Request, res: Response) => {
         const regex = new RegExp(escapeRegExp(req.body.search));
        let listProduct =  await this.productService.searchAll(regex)
        res.render('products/search', {products: listProduct});
    }

    decreaseProduct = async (req: Request, res: Response) => {
       let listProduct = await this.productService.decreaseAll();
        res.render('products/decrease', {products: listProduct});
    }

    ascendingProduct = async (req: Request, res: Response) => {
        let listProduct = await this.productService.ascendingAll();
        res.render('products/decrease', {products: listProduct});
    }
    hoaquaProduct = async (req: Request, res: Response) => {
        let listCategory = await this.categoryService.getAll(req.params.id);
        let products = listCategory[0];
        let product = products.id
        let listProduct = await this.productService.hoaquaAll(product);
        res.render('products/hoaqua', {products: listProduct});
    }

}

export default new ProductController();






