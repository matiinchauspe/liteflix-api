
// Internal Imports
import { moviesService } from '../services/index.js'

export const getAllMovies = async (req, res) => {
  try {
    const movies = await moviesService.getAllMovies()

    res.send({ status: 200, data: movies })
  } catch (error) {
    res.status(500).send({ status: 'ERROR', message: error.message })
  }
}

export const createMovie = async ({ body, file }, res) => {
  try {
    if (!body.title || !file) {
      return res.status(400).send({ status: 'ERROR', message: 'You must provide a title and an image' })
    }

    const newMovie = {
      title: body.title,
      image: {
        data: file.buffer,
        contentType: file.mimetype
      }
    }
    const createdMovie = await moviesService.createNewMovie(newMovie)

    res.status(201).send({ status: 'OK', data: createdMovie })
  } catch (error) {
    res.status(500).send({ status: 'ERROR', message: error.message })
  }
}
