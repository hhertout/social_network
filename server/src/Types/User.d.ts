import {IPost} from "./Post";

export interface IUser {
    _id: string
    email: string
    username: string
    password: string
    firstname: string
    lastname: string
    createdAt: Date
    updatedAt: Date

    posts: IPost[]
}

export interface IUserCreate {
    email: string
    username: string
    password: string
    firstname: string
    lastname: string
}

export interface IUserId {
    id: string
}

export interface ILogin {
    email: string
    password: string
}
