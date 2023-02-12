import app from './src/app'
import colors from 'colors'
import dotenv from 'dotenv'

colors.enable()
dotenv.config()

import config from './configs/config'
import './configs/dbConnection'

app.listen(config.PORT || '4000', () => {
  console.log(`Server running on port ${config.PORT}`.green)
})

export default app
