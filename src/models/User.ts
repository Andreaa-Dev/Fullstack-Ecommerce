/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

//add types for mongoose
export type UserDocument = Document & {
  _id: string
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
}

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
  },
  password: {
    type: String,
    // required: true,
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
})

export default mongoose.model<UserDocument>('User', UserSchema)
