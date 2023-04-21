"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            res.render('users/login');
        };
        this.login = async (req, res) => {
            console.log(req.body);
            const user = await this.userService.checkUser(req.body);
            if (!user) {
                return res.redirect(301, '/users/login');
            }
            else {
                req.session['user'] = user;
                if (user.role === 'admin') {
                    res.redirect(301, '/products');
                }
                if (user.role === 'user') {
                    res.redirect(301, '/products/client');
                }
            }
        };
        this.logout = async (req, res) => {
            req.session.destroy(function (err) {
                return res.redirect(301, '/users/login');
            });
        };
        this.showFormRegister = async (req, res) => {
            res.render('users/register');
        };
        this.register = async (req, res) => {
            let abc = await this.userService.getAll(req.params);
            var studentNames = abc.map(function (abcdef) {
                return abcdef.username;
            });
            let sss = studentNames.toString();
            if (sss.includes(req.body.username)) {
                res.redirect(301, '/users/error');
            }
            else {
                await this.userService.addUser(req.body);
                res.redirect(301, '/users/success');
            }
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map