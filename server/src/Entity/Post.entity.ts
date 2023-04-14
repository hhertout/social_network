import { Post } from '../Schema/Post.schema'
import { IPost, IPostCreate } from '../Types/Post'
import UserEntity from './User.entity'

export default class PostEntity {
  async createPost({ content, author }: IPostCreate): Promise<IPost> {
    const newPost = new Post({ content, author })
    try {
      await new UserEntity().assignPostToUser({
        id: newPost._id,
        user: author,
      })
    } catch (err: any) {
      throw new Error(err.message)
    }
    return newPost.save()
  }

  async deletePost({ id }: { id: string }): Promise<boolean> {
    await Post.findByIdAndDelete({ _id: id })
    return true
  }

  async getAllPosts(): Promise<IPost[]> {
    return Post.find({}).populate({ path: 'author', model: 'User' })
  }

  async getPostById({ id }: { id: string }): Promise<IPost | null> {
    return Post.findOne({ _id: id }).populate({
      path: 'author',
      model: 'User',
    })
  }

  async updatePost({
    id,
    content,
  }: {
    id: string
    content: string | undefined
  }): Promise<IPost | null | undefined> {
    if (content)
      return Post.findOneAndUpdate(
        { _id: id },
        { content },
        { returnDocument: 'after' }
      )
  }
}
