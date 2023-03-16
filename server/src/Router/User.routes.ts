import express, {Request, Response} from "express";
import {ILogin, IUserCreate} from "../Types/User";
import UserManager from "../Manager/User.manager";
import {IParams} from "../Types/Post";
import JwtService from "../Services/token.service";

const router = express.Router()

router
    .post("/login", async (req: Request, res: Response) => {
        const {email, password}: ILogin = req.body
        try {
            const user = await new UserManager().login({email, password})

            const token = new JwtService().generateToken({id: user._id})

            res.cookie("Authorization", token, {
                httpOnly: true,
                secure: true,
            })
            return res.status(200).json({
                success: true,
            })
        } catch(err: any) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    })
    .post("/signup", async (req, res) => {
        const {email, username, password, firstname, lastname}: IUserCreate = req.body
        const newUser = await new UserManager().signup({
            email, username, password, firstname, lastname
        })
        return res.status(201).json({
            success: true,
            user: newUser
        })
    })
    .delete("/delete/:id", async (req, res) => {
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
export default router