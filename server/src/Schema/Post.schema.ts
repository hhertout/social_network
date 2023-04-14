import { IPost } from '../Types/Post'
import mongoose, { Schema, model } from 'mongoose'
import { CommentSchema } from './Comment.schema'

export const PostSchema = new Schema<IPost>({
  // Default
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
  updatedAt: { type: Date, default: Date.now },

  // Main info
  content: { type: String, required: true },

  // Relationships
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  comments: [CommentSchema],
})

export const Post = model<IPost>('Post', PostSchema)
