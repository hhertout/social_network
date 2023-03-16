import jwt from 'jsonwebtoken';
import {NextFunction, Response} from "express";

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")
    if (!token) {
        res.status(401).json({message: "Access denied"})
    } else {
        try {
            req.user = jwt.verify(token, process.env.TOKEN_SECRET as string)
            next()
        } catch (err: any) {
            res.status(401).json({message: "Access denied"})
        }
    }
}