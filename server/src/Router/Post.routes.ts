import express, {Response} from "express";
import {IPostCreate} from "../Types/Post";
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
    .delete("/delete/:id", authMiddleware, async (req: AuthRequest, res: Response) => {
        const {id} = req.params
        try {
            const user = req.user.user
            const deletedPost = await new UserManager().deletePost({id, user})
            return res.status(200).json({
                success: true,
                posts: deletedPost
            })
        } catch (err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })
export default router
