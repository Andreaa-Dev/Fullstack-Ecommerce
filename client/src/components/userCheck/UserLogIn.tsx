import React from 'react'

import GoogleLogIn from '../user/googleLogIn/GoogleLogInPage'
import { BoxColumn, CustomizedText, CustomizedTitle } from '../customizedCSS'

function UserLogIn() {
  return (
    <div>
      <CustomizedTitle> YOU ALREADY HAVE A DIOR ACCOUNT</CustomizedTitle>

      <CustomizedText>--- OR ---</CustomizedText>
      <BoxColumn>
        <GoogleLogIn />
      </BoxColumn>
    </div>
  )
}

export default UserLogIn
