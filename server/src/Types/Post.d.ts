import {IUser} from "./User";
import {IComment} from "./Comment";

export interface IPost {
    _id?: string
    content: string
    createdAt: Date
    updatedAt: Date
    author: IUser
    comments: IComment[]
}

export interface IPostCreate {
    content: string
    author: string
}
export interface IPostId {
    id: string
}
export interface IPostDelete {
    success: boolean
    message: string
}
export interface IPostUpdate {
    content?: string
}

export interface IParams {
    [key: string]: string
}