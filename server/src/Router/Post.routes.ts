import express, {Response} from "express";
import {IPostCreate} from "../Types/Post";
import {authMiddleware} from "../Middleware/Auth.middleware";
import {AuthRequest, IToken} from "../Types/Auth";
import PostManager from "../Entity/Post.entity";

const router = express.Router()

router
    .post("/create", authMiddleware, async (req: AuthRequest, res: Response) => {
        const token: IToken = req.user
        const {content}: IPostCreate = req.body

        try {
            const author = token.user
            const post = await new PostManager().createPost({content, author})
            return res.status(200).json({
                success: true,
                post
            })
        } catch (err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })
    .delete("/delete/:id", authMiddleware, async (req: AuthRequest, res: Response) => {
        const {id} = req.params
        try {
            await new PostManager().deletePost({id})
            res.status(201).json({
                success: true,
                message: "Post deleted"
            })
        } catch(err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })
    .get("/all", authMiddleware, async (req: AuthRequest, res: Response) => {
        try {
            const posts = await new PostManager().getAllPosts()
            return res.status(200).json({
                success: true,
                posts
            })
        } catch (err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })
    .get("/get/:id", authMiddleware, async (req: AuthRequest, res: Response) => {
        const {id} = req.params
        try {
            const post = await new PostManager().getPostById({id})
            return res.status(200).json({
                success: true,
                post
            })
        } catch (err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })
    .patch("/update/:id", authMiddleware, async (req: AuthRequest, res: Response) => {
        const {id} = req.params
        const {content} = req.body
        try {
            const updatedPost = await new PostManager().updatePost({id, content})
            return res.status(201).json({
                success: true,
                post: updatedPost
            })
        } catch (err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })

    /*.delete("/delete/:id", authMiddleware, async (req: AuthRequest, res: Response) => {
        const {id} = req.params
        try {
            const author = req.user.user
            const deletedPost = await new PostManager().deletePost({id})
            return res.status(201).json({
                success: true,
                posts: deletedPost
            })
        } catch (err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })*/
export default router
