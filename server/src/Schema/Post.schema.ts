import {IPost} from "../Types/Post";
import {Schema, model} from "mongoose";

export const PostSchema = new Schema<IPost>({
    content: {type: String, required: true},
    createdAt: {type: Date, immutable: true, default: () => Date.now()},
    updatedAt: {type: Date, default: Date.now},
})

export const Post = model<IPost>('Post', PostSchema)