import {Request, Response} from "express";

class ErrorController {
    showHomeError = async (req: Request, res: Response) => {
        res.render('error');
    }

    showHomeSuccess = async (req: Request, res: Response) => {
        res.render('success');
    }
}

export default new ErrorController();