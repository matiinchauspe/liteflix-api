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

movieSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Movie = model('Movie', movieSchema)

export { Movie }
