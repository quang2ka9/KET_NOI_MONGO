import {Router} from "express";
import userController from "../controller/userController";
import productRouter from "./productRouter";
import homeController from "../controller/homeCotroller";
import ErrorController from "../controller/errorController"

const router = Router();
router.use('/products', productRouter);
router.get('/users/login', userController.showFormLogin);
router.get('/users/logout', userController.logout);
router.post('/users/login', userController.login);

router.get('/users/register', userController.showFormRegister);
router.post('/users/register', userController.register);

router.get('/', homeController.showHome);
router.get('/users/error', ErrorController.showHomeError);
router.get('/users/success', ErrorController.showHomeSuccess);
export default router;