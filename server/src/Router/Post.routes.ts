import express, {Request, Response} from "express";
import {IPostCreate} from "../Types/Post";
import PostManager from "../Manager/Post.manager";
import {authMiddleware} from "../Middleware/Auth.middleware";
import {AuthRequest, IToken} from "../Types/Auth";
import UserManager from "../Manager/User.manager";

const router = express.Router()

router
    .post("/create", authMiddleware, async (req: AuthRequest, res: Response) => {
        const token: IToken = req.user
        const {content}: IPostCreate = req.body

        try {
            const user = token.user
            const post = await new UserManager().createPost({content, user})
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
    .get("/get/:id", authMiddleware, async (req: Request, res: Response) => {
        const {id} = req.params
        try {
            const post = await new PostManager().getById({id})
            return res.status(200).json({
                success: true,
                post: post
            })
        } catch (err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })
    .delete("/delete/:id", authMiddleware, async (req: Request, res: Response) => {
        const {id} = req.params
        try {
            await new PostManager().delete({id})
            return res.status(200).json({
                success: true,
                message: "Post deleted successfully"
            })
        } catch (err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })
/*    .patch("/update/:id", async (req: Request, res: Response) => {
        const {id} = req.params
        const {content}: IPostUpdate = req.body
        try {
            const post = await new PostManager().update({id}, {content})
            return res.status(200).json({
                success: true,
                message: "Post updated successfully",
                post: post
            })
        } catch (err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })*/

export default router
