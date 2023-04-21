"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    constructor() {
        this.showHome = async (req, res) => {
            res.render('home');
        };
    }
}
exports.default = new HomeController();
//# sourceMappingURL=homeCotroller.js.map