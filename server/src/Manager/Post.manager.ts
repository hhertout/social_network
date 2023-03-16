import {IPost, IPostCreate, IPostId, IPostUpdate} from "../Types/Post";
import {Post} from "../Schema/Post.schema";

export default class PostManager {
    async create({ content }: IPostCreate): Promise<IPost> {
        // Create post
        const newPost = new Post({
            content
        })
        return await newPost.save()
    }
    async getAll(): Promise<IPost[]> {
        return Post.find()
    }
    async getById({id} : IPostId): Promise<IPost | Error | null> {
            return Post.findOne({_id: id});
    }
    async delete({id}: IPostId): Promise<Error | null> {
        return Post.findByIdAndDelete(id)
    }
    async update({id}: IPostId, {content}: IPostUpdate): Promise<IPost | Error | null> {
        return Post.findByIdAndUpdate(
            {_id: id},
            {content},
            {returnDocument: "after"}
        )
    }
}