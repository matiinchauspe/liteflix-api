// External Imports
import express from 'express'
// Internal imports
import { moviesController } from '../../controllers/index.js'

const router = express.Router()

router
  .get('/', moviesController.getAllMovies)
  .post('/upload-movie', moviesController.createMovie)

export default router
