import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

import userService from '../services/user'
import { JWT_SECRET } from '../util/secrets'

const clientId =
  process.env.NODE_ENV === 'production'
    ? process.env.GOOGLE_CLIENT_ID_PROD
    : process.env.GOOGLE_CLIENT_ID_DEV

// type in google-passport.d.ts file
export const googleStrategy = new GoogleTokenStrategy(
  {
    clientID: clientId,
  },
  async function (parsedToken: any, googleId: string, done: any) {
    console.log(parsedToken, 'k')
    const userPayload = {
      email: parsedToken?.payload?.email,
      firstName: parsedToken?.payload?.given_name,
      lastName: parsedToken?.payload?.family_name,
    }
    const user = await userService.findOrCreate(userPayload)
    done(null, user)
  }
)

// protect route
export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    const userEmail = payload.email
    const foundUser = await userService.findUserByEmail(userEmail)
    done(null, foundUser)
  }
)
