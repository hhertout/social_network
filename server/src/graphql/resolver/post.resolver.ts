import PostEntity from "../../Entity/Post.entity";
import {IPost, IPostCreate, IPostId, IPostUpdate} from "../../Types/Post";

export default {
    Query: {
        posts: async(): Promise<IPost[]> => {
            return await new PostEntity().getAllPosts()
        },
        post: async({id}: IPostId): Promise<IPost | null> => {
            return await new PostEntity().getPostById({id})
        }
    },
    Mutation :{
        create: async({content, author}: IPostCreate): Promise<IPost> => {
            return await new PostEntity().createPost({content, author})
        },
        delete: async({id}: IPostId): Promise<boolean> => {
            return await new PostEntity().deletePost({id})
        },
        update: async({id, content}: IPostUpdate): Promise<IPost | null | undefined> => {
            return await new PostEntity().updatePost({id, content})
        }
    }
}