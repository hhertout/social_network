import mongoose, {Schema, model} from "mongoose";
import {IUser} from "../Types/User";

export const UserSchema = new Schema<IUser>({
    //Default
    createdAt: {type: Date, immutable: true, default: () => Date.now()},
    updatedAt: {type: Date, default: () => Date.now()},

    //Main info
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},

    //Relationships
    posts: [{type: mongoose.SchemaTypes.ObjectId, ref: "Post"}]
})

export const User = model<IUser>('User', UserSchema)