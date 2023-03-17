import {Post} from "../Schema/Post.schema";
import {IPost, IPostCreate} from "../Types/Post";
import UserManager from "./User.manager";

export default class PostManager
{
    async createPost({content, author}: IPostCreate): Promise<IPost> {
        const newPost = new Post({content, author})
        try {
            await new UserManager().assignPostToUser({id: newPost._id, user: author})
        } catch (err: any) {
            throw new Error(err.message)
        }
        return newPost.save()
    }

    async deletePost({id}: { id: string }): Promise<boolean> {
        await Post.findByIdAndDelete({_id: id})
        return true
    }

    async getAllPosts(): Promise<IPost[]> {
        return Post.find({}).populate({path: "author", model: "User"})
    }

    async getPostById({id}: { id: string }): Promise<IPost | null> {
        return Post.findOne({_id: id}).populate({path: "author", model: "User"})
    }

    async updatePost({id, content}: { id: string, content: string }): Promise<IPost | null> {
        return Post.findOneAndUpdate({_id: id}, {content}, {returnDocument: "after"})
    }
}