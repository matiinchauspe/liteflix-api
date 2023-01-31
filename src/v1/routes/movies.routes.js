// External Imports
import express from 'express'
import multer from 'multer'
// Internal imports
import { moviesController } from '../../controllers/index.js'

const storage = multer.memoryStorage()
const upload = multer({ storage, limits: { fileSize: 1000000 } })

const router = express.Router()

router
  .get('/', moviesController.getAllMovies)
  .post(
    '/upload-movie',
    upload.single('image'),
    moviesController.createMovie
  )

export default router
