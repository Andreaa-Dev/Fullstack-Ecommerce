/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

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
  quantity: {
    type: Number,
    required: true,
  },
  date: { type: Date, default: Date.now },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  productIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
})

export default mongoose.model<OrderDocument>('Order', OrderSchema)
