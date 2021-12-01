import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

const findById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

const findAll = async (): Promise<UserDocument[]> => {
  return User.find().sort({ name: 1 })
}

const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

const findOrCreate = async (payload: Partial<UserDocument>) => {
  const result = await User.findOne({ email: payload.email })
  if (result) {
    return result
  } else {
    const user = new User({
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      acceptedTerms: true,
    })
    const createdUser = await user.save()
    return createdUser
  }
}

const findUserByEmail = async (payload: Partial<UserDocument>) => {
  return User.findOne({ email: payload.email })
}

export default {
  createUser,
  findById,
  findAll,
  updateUser,
  deleteUser,
  findOrCreate,
  findUserByEmail,
}
