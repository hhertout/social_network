import UserEntity from "../../Entity/User.entity"
import {ILogin} from "../../Types/Auth"
import {IUser, IUserCreate, IUserId} from "../../Types/User"

export default {
    Query: {
        users: async (): Promise<IUser[] | Error | null> => {
            return new UserEntity().getAllUsers()
        },
        user: async (_: any, {id}: IUserId): Promise<IUser | Error | null> => {
            return await new UserEntity().getById({id})
        },
    },
    Mutation: {
        signup: async (_: any, {email, password, username, firstname, lastname}: IUserCreate): Promise<IUser> => {
            return await new UserEntity().signup({
                email,
                password,
                username,
                firstname,
                lastname
            })
        },
        login: async (_: any, {email, password}: ILogin): Promise<IUser> => {
            return await new UserEntity().login({email, password})
        },
        unsubscribe: async (_: any, {id}: IUserId): Promise<boolean> => {
            try {
                return await new UserEntity().deleteAccount({id})
            } catch (err) {
                return false
            }
        },
    },
}
