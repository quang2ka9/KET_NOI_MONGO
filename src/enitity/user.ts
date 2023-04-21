// import {model, Schema} from "mongoose";
//
// export interface IUser {
//     username ?: string;
//     password ?: string;
// }
//
// const UserSchema = new Schema<IUser>({
//     username : String,
//     password : String
// })
//
// const User = model('User', UserSchema);
//
// export {User};

import mongoose from "mongoose";
import bcrypt from "bcrypt";


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
});

const User = mongoose.model('User', UserSchema);

export {User}