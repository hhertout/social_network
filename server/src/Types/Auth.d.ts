export interface ILogin {
    email: string
    password: string
}

export interface AuthRequest extends e.Request {
    [key: string]: any
}