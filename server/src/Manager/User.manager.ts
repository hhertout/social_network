import {IUser, IUserCreate, IUserId} from "../Types/User";
import {User} from "../Schema/User.schema";
import bcrypt from "bcrypt";
import {ILogin} from "../Types/Auth";
import {Post} from "../Schema/Post.schema";

export default class UserManager {
    async signup({email, username, password, firstname, lastname}: IUserCreate): Promise<IUser> {
        const hash = await bcrypt.hash(password, 10)
        const newUser = new User({
            email,
            username,
            password: hash,
            firstname,
            lastname
        })
        return newUser.save()
    }

    async login({email, password}: ILogin) {
        const user: IUser | null = await User.findOne({email: email})
        if (user) {
            const validPwd = await bcrypt.compare(password, user.password)
            if (validPwd) {
                return user
            } else {
                throw new Error("Email or password is incorrect")
            }
        } else {
            throw new Error("Email or password is incorrect")
        }
    }

    async deleteAccount({id}: IUserId): Promise<IUser | Error | null> {
        return User.findByIdAndDelete({_id: id})
    }

    async getAllUsers(): Promise<IUser[]> {
        return User.find({}, {password: 0})
    }

    async getById({id}: IUserId): Promise<IUser | Error | null> {
        return User.findOne({_id: id}, {password: 0})
    }

    async createPost({content, user}: { content: string, user: string }) {
        console.log(user)
        const newPost = new Post({content})
        try {
            await newPost.save()
        } catch (err: any) {
            throw new Error(err.message)
        }

        return User.findByIdAndUpdate(
            {_id: user},
            {$push: {posts: newPost}},
            {returnDocument: "after"}
        )
    }
}