import mongoose from 'mongoose'
import config from './config'
import { CacheConnection } from '../src/types'

let cacheConnection: CacheConnection = {
  connected: false,
  dbName: 'unconnected'
}
void (async () => {
  try {
    if (!cacheConnection.connected) {
      const db = await mongoose.connect(config.MONGO_URI)
      cacheConnection = {
        connected: true,
        dbName: db.connection.name
      }
    }
    console.log(`Database connected at: ${cacheConnection.dbName}`.green)
  } catch (err) {
    console.log({ message: 'Error during mongodb connection', err })
  }
})()
