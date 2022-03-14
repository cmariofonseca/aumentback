import { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true
    },
    image: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true,
      trim: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default model('Post', postSchema)
