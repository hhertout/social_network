import {Schema, model} from "mongoose";
import {IUser} from "../Types/User";
import {PostSchema} from "./Post.schema";

export const UserSchema = new Schema<IUser>({
    createdAt: {type: Date, immutable: true, default: () => Date.now()},
    updatedAt: {type: Date, default: () => Date.now()},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    posts: [{type: PostSchema}]

})

export const User = model<IUser>('User', UserSchema)