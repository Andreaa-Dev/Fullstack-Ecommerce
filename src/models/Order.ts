/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

//add types for mongoose
export type OrderDocument = Document & {
  name: string
  variant: string
  price: number
  quantity: number
  date: Date
  userId: mongoose.Schema.Types.ObjectId
  productId: mongoose.Schema.Types.ObjectId
}

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: Date,
  userId: {
    ref: 'User',
  },
  productId: {
    ref: 'Product',
  },
})

export default mongoose.model<OrderDocument>('Product', orderSchema)
