import request from 'supertest'
import app from '../../src/app'
import { connectDatabase, disconnectDatabase } from '../../src/services/databaseService'

const paths = {
  getUsers: '/api/getUsers'
}

describe(`GET - ${paths.getUsers} - Should returns a list of users `, () => {
  let response: any;

  beforeAll(async (): Promise<void> => {
    await connectDatabase();
    response = await request(app).get(paths.getUsers).send()
  })

  it(`status 200`, async () => {
    const { statusCode } = response

    expect(statusCode).toBe(200)
  })

  it(`returns an array of objects`, async() => {
    const { data: users } = response.body
    const { message } = response.body

    expect(message).toEqual('Users fetched successfully')
    expect(users).toBeInstanceOf(Array)
    expect(users[0]).toBeInstanceOf(Object)
    expect(users[0].email).toBeDefined()
    return
  })
 
  afterAll(async () => {
    await disconnectDatabase()
  })
})
