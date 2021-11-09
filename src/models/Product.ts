/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

//add types for mongoose
export type ProductDocument = Document & {
  name: string
  price: number
  priceSign: string
  imageLink: string
  description: string
  variant: string[]
}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  priceSign: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  variant: [
    {
      type: String,
    },
  ],
})

export default mongoose.model<ProductDocument>('Product', ProductSchema)
