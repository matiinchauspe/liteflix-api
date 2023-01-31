// External imports
import express from 'express'
import cors from 'cors'
// Internal imports
import { Logs } from './utils'
import { moviesRouter } from './v1/routes'
import { dbInit } from './db/init'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/v1/movies', moviesRouter)
// Connect to the database
dbInit().then(() => {
  Logs.dbLog('Database is connected 🚀')
})

app.listen(PORT, () => {
  Logs.serverLog(`Server is running on port ${PORT} 🚀`)
})
