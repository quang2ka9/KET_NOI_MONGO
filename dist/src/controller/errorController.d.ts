import { Request, Response } from "express";
declare class ErrorController {
    showHomeError: (req: Request, res: Response) => Promise<void>;
    showHomeSuccess: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ErrorController;
export default _default;
