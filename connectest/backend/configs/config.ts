interface config {
  NODE_ENV: string
  PORT: string
  MONGO_URI: string
}

const env: config = {
  NODE_ENV: typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : '',
  PORT: typeof process.env.PORT === 'string' ? process.env.PORT : '',
  MONGO_URI: typeof process.env.MONGO_URI === 'string' ? process.env.MONGO_URI : ''
}

export default env
