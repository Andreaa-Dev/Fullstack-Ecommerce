/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'
import { VariantSchema, ProductDocument } from './Product'

export type ProductOrder = ProductDocument & {
  quantity: number
}

const ProductOrderSchema = new mongoose.Schema({
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
  date: Date
  userId: string
  products: ProductOrder[]
}

const OrderSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  products: [
    {
      type: ProductOrderSchema,
    },
  ],
})

export default mongoose.model<OrderDocument>('Order', OrderSchema)
