export interface ILogin {
    email: string
    password: string
}

export interface AuthRequest extends e.Request {
    [key: string]: any
}

export interface IToken {
    user: string
    iat: number
    exp: number
}