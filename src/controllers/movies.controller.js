import multer from 'multer'
// Internal Imports
import { moviesService } from '../services/index.js'

const storage = multer.memoryStorage()
const upload = multer({ storage, limits: { fileSize: 1000000 } }).single('image')

export const getAllMovies = async (req, res) => {
  try {
    const movies = await moviesService.getAllMovies()

    res.send({ status: 200, data: movies })
  } catch (error) {
    res.status(500).send({ status: 'ERROR', message: error.message })
  }
}

export const createMovie = async (req, res) => {
  return upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(400).send({ status: 'ERROR', message: 'An error was ocurred when uploading - check if the size of the file is exceeded' })
    } else if (err) {
      // An unknown error occurred when uploading.
      res.status(500).send({ status: 'ERROR', message: 'An error was ocurred when uploading - Unknown error' })
    }
    // Everything went fine.
    try {
      if (!req.body.title || !req.file) {
        return res.status(400).send({ status: 'ERROR', message: 'You must provide a title and an image' })
      }

      const newMovie = {
        title: req.body.title,
        image: {
          data: req.file.buffer,
          contentType: req.file.mimetype
        }
      }
      const createdMovie = await moviesService.createNewMovie(newMovie)

      res.status(201).send({ status: 'OK', data: createdMovie })
    } catch (error) {
      res.status(500).send({ status: 'ERROR', message: error.message })
    }
  })
}
