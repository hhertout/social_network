import {IPost} from "../Types/Post";
import {Schema, model} from "mongoose";

const PostSchema = new Schema<IPost>({
    content: { type: String, required: true }
})

export const Post = model<IPost>('Post', PostSchema)