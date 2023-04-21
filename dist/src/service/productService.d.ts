/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
declare class ProductService {
    constructor();
    getAll: () => Promise<Omit<import("mongoose").Document<unknown, {}, import("../enitity/product").IProduct> & Omit<import("../enitity/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[]>;
    add: (product: any) => Promise<void>;
    delete: (id: any) => Promise<void>;
    findById: (id: any) => Promise<import("mongoose").Document<unknown, {}, import("../enitity/product").IProduct> & Omit<import("../enitity/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateOne: (idSkin: any, newSkin: any) => Promise<void>;
    searchAll: (regex: any) => Promise<(import("mongoose").Document<unknown, {}, import("../enitity/product").IProduct> & Omit<import("../enitity/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    decreaseAll: () => Promise<(import("mongoose").Document<unknown, {}, import("../enitity/product").IProduct> & Omit<import("../enitity/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    ascendingAll: () => Promise<(import("mongoose").Document<unknown, {}, import("../enitity/product").IProduct> & Omit<import("../enitity/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    hoaquaAll: (product: any) => Promise<(import("mongoose").Document<unknown, {}, import("../enitity/product").IProduct> & Omit<import("../enitity/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
}
declare const _default: ProductService;
export default _default;
