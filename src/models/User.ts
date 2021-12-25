/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document, Model } from 'mongoose'

//add types for mongoose
export type UserDocument = Document & {
  _id: any
  firstName: string
  lastName: string
  email: string
  password: string
  country: string
  address: string
  phone: number
  DOB: Date
  acceptedTerms: boolean
  role: string
  logInWith: string
  isBanned: boolean
}

export interface UserTypeModel extends Model<UserDocument> {}

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  country: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  acceptedTerms: {
    type: Boolean,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  isBanned: {
    type: Boolean,
    default: 'false',
  },
  logInWith: {
    type: String,
    default: 'password',
  },
  orderIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
})

export default mongoose.model<UserDocument, UserTypeModel>('User', UserSchema)
