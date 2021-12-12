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

// join / nest populate
const findById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId).populate({
    path: 'orderIds',
  })

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
      logInWith: 'google',
    })
    const createdUser = await user.save()
    return createdUser
  }
}

const findUserByEmail = async (email: string) => {
  return User.findOne({ email: email })
}

const banUser = async (userId: string) => {
  const foundUser = await User.findOne({ _id: userId })
  if (foundUser) {
    if (foundUser.isBanned === true) {
      foundUser.isBanned = false
      updateUser(userId, foundUser)
    } else {
      foundUser.isBanned = true
      updateUser(userId, foundUser)
    }
  } else {
    throw new NotFoundError('User not found')
  }
}

const updateUserWithNewPassword = async (email: string, password: string) => {
  const foundUser = await findUserByEmail(email)
  if (foundUser) {
    foundUser.password = password
    const userWithNewpass = await foundUser.save()
    return userWithNewpass
  } else {
    throw new NotFoundError('User not found')
  }
}

const makeAdminController = async (userId: string) => {
  const foundUser = await User.findOne({ _id: userId })
  if (foundUser) {
    if (foundUser.role === 'admin') {
      foundUser.role = 'user'
    } else {
      if (foundUser.isBanned === true) {
        foundUser.role = 'user'
      } else {
        foundUser.role = 'admin'
      }
    }
    updateUser(userId, foundUser)
  } else {
    throw new NotFoundError('User not found')
  }
}

export default {
  createUser,
  findById,
  findAll,
  updateUser,
  deleteUser,
  findOrCreate,
  findUserByEmail,
  banUser,
  updateUserWithNewPassword,
  makeAdminController,
}
