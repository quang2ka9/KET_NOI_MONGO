import { Request, Response } from "express";
declare class ClientController {
    private productService;
    private categoryService;
    constructor();
    showHomeClient: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ClientController;
export default _default;
