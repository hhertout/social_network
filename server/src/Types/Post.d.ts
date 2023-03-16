export interface IPost {
    content: string
}

export interface IPostCreate {
    content: string
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