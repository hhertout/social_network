import mongoose, {Schema} from "mongoose";
import {IComment} from "../Types/Comment";

export const CommentSchema = new Schema<IComment>({
    comment: {type: String, required: true},
    createdAt: {type: Date, immutable: true, default: () => Date.now()},
})

export const Comment = mongoose.model<IComment>("Comment", CommentSchema)