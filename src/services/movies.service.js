// External imports
import { v4 as uuid } from 'uuid'
// Internal imports
import { Movie } from '../models'
import { Logs } from '../utils'

export const getAllMovies = async () => {
  const movies = await Movie.find({})

  return movies
}

export const createNewMovie = async (newMovie) => {
  const id = uuid()
  const movieToInsert = {
    ...newMovie,
    id,
    createdAt: new Date().toLocaleString('en-US', { timezone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timezone: 'UTC' })
  }
  const createdMovie = new Movie(movieToInsert)

  const savedMovie = await createdMovie.save()
  Logs.dbLog('Movie was saved to the database 😃')

  return savedMovie
}
