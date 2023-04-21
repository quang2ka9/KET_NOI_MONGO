import {Product} from "../enitity/product";

class ProductService {
    constructor() {
    }

    getAll = async () => {
        let products = await Product.find().populate('category', 'name');
        return products;
    }

    add = async (product) => {
        await Product.create(product);
    }

    delete = async (id) => {
        await Product.findByIdAndDelete(id);
    }

    findById = async (id) => {
        return (await Product.findOne({_id: id}));
    }

    updateOne = async (idSkin, newSkin) => {
        await Product.updateOne({_id: idSkin}, {$set: newSkin});
    }
    searchAll = async (regex) => {
        let search = await Product.find({ "name": regex });
        return search;
    }
    decreaseAll = async () => {
        let decrease = await Product.find().sort({ price: -1 });
        return decrease;
    }
    ascendingAll = async () => {
        let ascending = await Product.find().sort({ price: 1 });
        return ascending;
    }
    hoaquaAll = async (product) => {
        let hoaqua = await Product.find({"category": product})
        return hoaqua;
    }
}

export default new ProductService();