import {Router} from "express";
import productController from "../controller/productController";
import clientController from "../controller/clientController";

const productRouter = Router();
productRouter.get('/', productController.findAll);
productRouter.get('/create', productController.showFormAdd);
productRouter.get('/decrease', productController.decreaseProduct);
productRouter.get('/ascending', productController.ascendingProduct);
productRouter.get('/hoaqua', productController.hoaquaProduct);
productRouter.post('/create', productController.addProduct);
productRouter.post('/update', productController.editProduct);
productRouter.post('/search', productController.searchProduct);
productRouter.get('/delete/:id', productController.deleteProduct);
productRouter.get('/update/:id', productController.showUpdateProduct);


productRouter.get('/client', clientController.showHomeClient);

export default productRouter;