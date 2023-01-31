import { connect } from 'mongoose'

import { config } from '../config/index.js'

const { dbHost: DB_HOST, dbName: DB_NAME } = config
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

const DB_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

const dbInit = async () => {
  await connect(DB_URI)
}

export { dbInit }
