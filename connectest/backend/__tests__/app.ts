import request from 'supertest'
import app from '../src/app'

const path = '/ping'

describe('Server Status', () => {
  it(`GET - ${path}`, async () => {
    const response = await request(app).get(path).send()

    console.log(response.body, response.statusCode)
  })
})
