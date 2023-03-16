export interface IUser {
    _id: string
    email: string
    username: string
    password: string
    firstname: string
    lastname: string
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
