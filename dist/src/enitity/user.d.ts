import mongoose from "mongoose";
declare const User: mongoose.Model<{
    username: string;
    password: string;
    role: "admin" | "user";
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
    role: "admin" | "user";
}> & Omit<{
    username: string;
    password: string;
    role: "admin" | "user";
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password: string;
    role: "admin" | "user";
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username: string;
    password: string;
    role: "admin" | "user";
}>> & Omit<mongoose.FlatRecord<{
    username: string;
    password: string;
    role: "admin" | "user";
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export { User };
