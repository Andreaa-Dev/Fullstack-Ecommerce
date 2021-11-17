import passport from 'passport'
import jwt from 'jsonwebtoken'
import passportLocal from 'passport-local'
import { JWT_SECRET } from '../util/secrets'
import GoogleTokenStrategy from 'passport-google-id-token'

import userService from '../services/user'

// type in passport.d.ts file
const LocalStrategy = passportLocal.Strategy
export const googleStrategy = new GoogleTokenStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
  },
  async function (parsedToken: any, googleId: string, done: any) {
    console.log(parsedToken, 't')
    const userPayload = {
      email: parsedToken?.payload?.email,
      firstName: parsedToken?.payload?.given_name,
      lastName: parsedToken?.payload?.family_name,
    }

    const user = await userService.findOrCreate(userPayload)
    console.log('user', user)
    done(null, user)
  }
)

// export const jwtStategy = new jwtStrategy(
//     {
//         secretOrKey:JWT_SECRET,
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     }
//     async(payload: any, done:any) =>{
//         const userEmail = payload.email
//         const foundUser = await userService.fin
//     }
// )
