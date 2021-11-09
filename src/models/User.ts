/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

//add types for mongoose
export type UserDocument = Document & {
  firstName: string
  lastName: string
  email: string
  password: string
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
    required: true,
  },
})

export default mongoose.model<UserDocument>('User', UserSchema)
