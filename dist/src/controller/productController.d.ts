import { Request, Response } from "express";
declare class ProductController {
    private productService;
    private categoryService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    showFormAdd: (req: Request, res: Response) => Promise<void>;
    addProduct: (req: Request, res: Response) => void;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
    showUpdateProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    searchProduct: (req: Request, res: Response) => Promise<void>;
    decreaseProduct: (req: Request, res: Response) => Promise<void>;
    ascendingProduct: (req: Request, res: Response) => Promise<void>;
    hoaquaProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
