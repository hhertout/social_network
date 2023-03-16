import express, {Request, Response} from "express";
import UserManager from "../Manager/User.manager";
import {IParams} from "../Types/Post";
import {authMiddleware} from "../Middleware/Auth.middleware";

const router = express.Router()

router
    .delete("/delete/:id", authMiddleware, async (req: Request, res: Response) => {
        const {id}: IParams = req.params
        try {
            await new UserManager().deleteAccount({id})
            return res.status(200).json({
                success: true,
                message: "User deleted successfully"
            })
        } catch (err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })
    .get("/all", authMiddleware, async (req: Request, res: Response) => {
        const users = await new UserManager().getAllUsers()
        return res.status(200).json({
            success: true,
            users
        })
    })
export default router