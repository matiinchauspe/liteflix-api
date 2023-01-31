import express from 'express'
import multer from 'multer'
// Internal imports
import { moviesController } from '../../controllers'

const storage = multer.memoryStorage()
const upload = multer({ storage })

const router = express.Router()

router
  .get('/', moviesController.getAllMovies)
  .post('/upload-movie', upload.single('image'), moviesController.createMovie)

export default router
