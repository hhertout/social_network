import {IUserId} from "../Types/User";
import jwt from "jsonwebtoken";

export default class JwtService
{
    generateToken({id}: IUserId) {
        return jwt.sign({ user: id }, process.env.JWT_SECRET as string, {expiresIn: "24h"} )
    }
}