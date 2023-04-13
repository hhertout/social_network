import UserEntity from '../Entity/User.entity'
import {IUser} from '../Types/User'

export default {
    Query: {
        users: async(): Promise<IUser[]> => {
            return new UserEntity().getAllUsers()
        }
    },
}