import {Request, Response} from "express";
import userService from "../service/userService";
import session from 'express-session'


class UserController {

    private userService;

    constructor() {
        this.userService = userService;
    }

    showFormLogin = async (req: Request, res: Response) => {
        res.render('users/login');
    }

    login = async (req: Request, res: Response) => {
        console.log(req.body)
        const user = await this.userService.checkUser(req.body);
        if (!user) {
            return res.redirect(301, '/users/login');
        }else {
            req.session['user'] = user;
            if(user.role === 'admin'){
                res.redirect(301, '/products');
            }
            if(user.role === 'user'){
                res.redirect(301, '/products/client');
            }
        }
    }

    logout = async (req: Request, res: Response) => {
        req.session.destroy(function (err) {
            return res.redirect(301, '/users/login');
        })
    }

    showFormRegister = async (req: Request, res: Response) => {
        res.render('users/register')
    }

    register = async (req: Request, res: Response) => {
        let abc = await this.userService.getAll(req.params);

        var studentNames = abc.map(function(abcdef) {
            return abcdef.username;
        });
        let sss = studentNames.toString()
        if (sss.includes(req.body.username)) {
            res.redirect(301, '/users/error')
        } else {
            await this.userService.addUser(req.body);
            res.redirect(301, '/users/success')
        }
    }
}

export default new UserController();