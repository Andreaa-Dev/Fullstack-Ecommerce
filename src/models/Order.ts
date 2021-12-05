/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'
import { VariantSchema } from './Product'

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
  quantity: {
    type: Number,
    required: true,
  },
  //embed schema
  variant: [VariantSchema],
})

//add types for mongoose
export type OrderDocument = Document & {
  _id: string
  name: string
  variant: string
  price: number
  quantity: number
  date: Date
  userId: mongoose.Schema.Types.ObjectId
  productId: mongoose.Schema.Types.ObjectId
}

const OrderSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  products: [
    {
      type: ProductSchema,
    },
  ],
})

export default mongoose.model<OrderDocument>('Order', OrderSchema)
