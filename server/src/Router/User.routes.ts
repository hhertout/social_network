import express, {Request, Response} from "express";
import UserEntity from "../Entity/User.entity";
import {IParams} from "../Types/Post";
import {authMiddleware} from "../Middleware/Auth.middleware";
import {AuthRequest} from "../Types/Auth";

const router = express.Router()

router
    .delete("/delete/:id", authMiddleware, async (req: Request, res: Response) => {
        const {id}: IParams = req.params
        try {
            await new UserEntity().deleteAccount({id})
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
    .get("/all", authMiddleware, async (req: AuthRequest, res: Response) => {
        const users = await new UserEntity().getAllUsers()
        return res.status(200).json({
            success: true,
            users
        })
    })
    .get("/get/:id", authMiddleware, async (req: AuthRequest, res: Response) => {
        const {id}: IParams = req.params
        try {
            const user = await new UserEntity().getById({id})
            return res.status(200).json({
                success: true,
                user
            })
        } catch (err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })
export default router