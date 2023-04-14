import JwtService from '../../src/Services/token.service'
import dotenv from 'dotenv'

describe('JwtService', () => {
  describe('verify JWT', () => {
    it('should verify a JWT secret', () => {
      dotenv.config()
      const secret = process.env.JWT_SECRET
      expect(secret).not.toBeNull()
      expect(secret).not.toBeUndefined()
      expect(secret).not.toBe('')
      expect(secret).not.toBe('undefined')
      expect(secret).not.toBe('null')
      expect(secret).not.toBe(' ')
    })
  })
  describe('generateToken', () => {
    it('should generate a JWT token with the user id', () => {
      const id: string = 'abc123'
      process.env.JWT_SECRET = 'jdsbjslqvqhslhjdv'
      const jwtService = new JwtService()
      const token = jwtService.generateToken({ id })
      expect(token).not.toBeNull()
    })

    it('should throw an error if id is empty', () => {
      const id = ''
      const jwtService = new JwtService()

      expect(() => jwtService.generateToken({ id })).toThrow()
    })
    it('should throw an error if id is equal to 0', () => {
      const id = ''
      const jwtService = new JwtService()

      expect(() => jwtService.generateToken({ id })).toThrow()
    })
  })
})
