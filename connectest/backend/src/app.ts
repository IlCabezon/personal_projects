import express from 'express'
import morgan from 'morgan'
import router from './routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', router)

app.get('/ping', (_, res) => {
  res.status(200).json({ message: 'pong' })
})

export default app
