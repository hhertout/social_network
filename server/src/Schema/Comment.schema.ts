import mongoose, { Schema } from 'mongoose'
import { IComment } from '../Types/Comment'

export const CommentSchema = new Schema<IComment>({
  comment: { type: String, required: true },
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
})

export const Comment = mongoose.model<IComment>('Comment', CommentSchema)
