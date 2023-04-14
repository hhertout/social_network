import jwt from 'jsonwebtoken'
import { authMiddleware } from '../../src/Middleware/Auth.middleware'

describe('authMiddleware', () => {
  let req: any
  let res: any
  let next: any

  beforeEach(() => {
    req = {
      header: jest.fn(),
      user: null,
    }
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
    next = jest.fn()
  })

  it('should return a 401 error if no token is provided', () => {
    authMiddleware(req, res, next)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ message: 'Access denied' })
    expect(next).not.toHaveBeenCalled()
  })

  it('should return a 401 error if an invalid token is provided', () => {
    req.header.mockReturnValue('Bearer invalid-token')

    authMiddleware(req, res, next)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ message: 'Access denied' })
    expect(next).not.toHaveBeenCalled()
  })
})
