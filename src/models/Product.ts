/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

//add types for mongoose
export type ProductDocument = Document & {
  _id: string
  category: string
  name: string
  price: number
  imageLink: string
  description: string
  variant: VariantDocument[]
}
export type VariantDocument = {
  hexValue: string
  colourName: string
}

const VariantSchema = new mongoose.Schema({
  hexValue: {
    type: String,
  },
  colourName: {
    type: String,
  },
})

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
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
  //embed schema
  variant: [VariantSchema],
})

ProductSchema.index({ name: 'text', category: 'text', description: 'text' })

export default mongoose.model<ProductDocument>('Product', ProductSchema)
