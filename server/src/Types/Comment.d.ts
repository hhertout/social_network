import {IUser} from "./User";

export interface IComment {
    author: IUser
    comment: string
    createdAt: Date
}