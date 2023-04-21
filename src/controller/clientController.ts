import {Request, Response} from "express";
import productService from"../service/productService";
import categoryService from "../service/CategoryService";


class ClientController {
    private productService;
    private categoryService;

    constructor() {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    showHomeClient = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let user = req.session['user'];
            let idUser = user._id;
            let listProduct = await this.productService.getAll();
            res.render('client/abc', {products: listProduct});
        } else {
            res.redirect(301, '/users/login');
        }
    }
}

export default new ClientController();
