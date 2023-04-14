import { dbConnect } from '../../src/Config/database.config'

describe('dbConnect', () => {
  it('should connect to the database', () => {
    expect(async () => await dbConnect()).toBeDefined()
  })
})
