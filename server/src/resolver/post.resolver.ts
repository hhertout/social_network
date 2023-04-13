import PostEntity from "../Entity/Post.entity";
import { IPost } from "../Types/Post";

export default {
    Query: {
        posts: async(): Promise<IPost[]> => {
            return await new PostEntity().getAllPosts()
        }
    }
}