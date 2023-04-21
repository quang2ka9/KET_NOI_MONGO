"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorController {
    constructor() {
        this.showHomeError = async (req, res) => {
            res.render('error');
        };
        this.showHomeSuccess = async (req, res) => {
            res.render('success');
        };
    }
}
exports.default = new ErrorController();
//# sourceMappingURL=errorController.js.map