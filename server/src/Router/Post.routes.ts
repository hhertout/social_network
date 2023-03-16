import express, {Request, Response} from "express";
import {IPostCreate, IPostUpdate} from "../Types/Post";
import PostManager from "../Manager/Post.manager";

const router = express.Router()

router
    .post("/create", async (req: Request, res: Response) => {
        // Create post
        const {content}: IPostCreate = req.body
        try {
            const newPost = await new PostManager().create({content})
            return res.status(200).json({
                success: true,
                post: newPost
            })
        } catch (err: any) {
            return res.status(500).json({message: err.message})
        }
    })
    .get("/all", async (req: Request, res: Response) => {
        try {
            const posts = await new PostManager().getAll()
            return res.status(200).json({
                success: true,
                posts
            })
        } catch (err: any) {
            return res.status(500).json({message: err.message})
        }
    })
    .get("/get/:id", async (req: Request, res: Response) => {
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
    .delete("/delete/:id", async (req: Request, res: Response) => {
        const {id} = req.params
        try {
            const post = await new PostManager().delete({id})
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
    .patch("/update/:id", async (req: Request, res: Response) => {
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
    })

export default router
