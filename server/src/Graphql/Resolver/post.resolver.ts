import PostEntity from "../../Entity/Post.entity";
import {IPost, IPostCreate, IPostId, IPostUpdate} from "../../Types/Post";

export default {
    Query: {
        posts: async(): Promise<IPost[]> => {
            return await new PostEntity().getAllPosts()
        },
        post: async(_: any, {id}: IPostId): Promise<IPost | null> => {
            if (!id) {
                throw new Error("id is undefined");
            }
            return await new PostEntity().getPostById({id})
        }
    },
    Mutation :{
        createPost: async(_: any,{content, author}: IPostCreate): Promise<IPost> => {
            return await new PostEntity().createPost({content, author})
        },
        deletePost: async(_: any,{id}: IPostId): Promise<boolean> => {
            return await new PostEntity().deletePost({id})
        },
        updatePost: async(_: any, {id, content}: IPostUpdate): Promise<IPost | null | undefined> => {
            return await new PostEntity().updatePost({id, content})
        }
    }
}