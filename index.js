// External imports
import express from 'express'
import cors from 'cors'
// Internal imports
import { Logs } from './src/utils/index.js'
import { moviesRouter } from './src/v1/routes/index.js'
import { dbInit } from './src/db/init.js'

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
