import {Category} from "../enitity/cagteogry";

class CategoryService {
    constructor() {
    }

    getAll = async () => {
        let products = await Category.find();
        return products;
    }
    byIdCategory = async (catalogue_id) => {
        let products = await Category.find({_id: catalogue_id});
        return products;
    }

}

export default new CategoryService();