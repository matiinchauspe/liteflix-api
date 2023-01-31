import mongoose from 'mongoose'

const { Schema, model } = mongoose

const movieSchema = new Schema({
  title: {
    type: String
    // required: true
  },
  image: {
    data: Buffer,
    contentType: String
    // required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const Movie = model('Movie', movieSchema)

export { Movie }
