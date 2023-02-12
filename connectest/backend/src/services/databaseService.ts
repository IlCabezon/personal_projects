import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDatabase = async (): Promise<void> => {
  try {
    const db = await mongoose.connect(`${process.env.MONGO_URI}`)

    console.log(`Database connected at: ${db.connection.name}`.green)
  } catch (err) {
    console.log({ message: 'Error during mongodb connection', err })
  }
};

export const disconnectDatabase = async () : Promise<void> => {
  await mongoose.disconnect()
}