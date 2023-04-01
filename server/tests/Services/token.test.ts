import jwt from "jsonwebtoken";
import JwtService from "../../src/Services/token.service";
import { IUserId } from "../../src/Types/User";

describe('JwtService', () => {
  describe('generateToken', () => {
    it('should generate a JWT token with the user id', () => {
      const id: string = 'abc123'
      const jwtService = new JwtService();
      const token = jwtService.generateToken({id});
      console.log(token)
      expect(token).toBeTruthy();

      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      expect(decoded).toBeTruthy();
    });

    it('should throw an error if JWT_SECRET is not defined', () => {
      const id = 'abc123';
      process.env.JWT_SECRET = undefined;
      const jwtService = new JwtService();
      expect(() => jwtService.generateToken({id})).toThrow();
    });
  });
});