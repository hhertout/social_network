import { IUserId } from '../Types/User'
import jwt from 'jsonwebtoken'

export default class JwtService {
  generateToken({ id }: IUserId): string {
    if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not defined')
    if (!id || id === '' || id === '0')
      throw new Error('User id is not defined')

    return jwt.sign({ user: id }, process.env.JWT_SECRET as string, {
      expiresIn: '24h',
    })
  }
}
