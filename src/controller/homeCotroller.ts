import {Request, Response} from "express";

class HomeController {
    showHome = async (req: Request, res: Response) => {
        res.render('home');
    }
}

export default new HomeController();

