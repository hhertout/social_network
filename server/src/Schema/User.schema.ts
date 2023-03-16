import {Schema, model} from "mongoose";
import {IUser} from "../Types/User";

const UserSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
})

export const User = model<IUser>('User', UserSchema)