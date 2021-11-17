import React from 'react'
import axios from 'axios'
import GoogleLogIn from 'react-google-login'
import GoogleIcon from '@mui/icons-material/Google'

import { CustomizedButton } from '../../customizedCSS'

const responseGoogle = async (response: any) => {
  let res = await axios.post(
    'http://localhost:5000/api/v1/user/google-authenticate',
    { id_token: response.tokenObj.id_token }
  )
  console.log(response, 'a')
  console.log(res, 's')
}

function GoogleLogInPage() {
  return (
    <div>
      <GoogleLogIn
        clientId="273653539549-b037fplk3539kkdd242k85qg40ecl5f4.apps.googleusercontent.com"
        render={(renderProps) => (
          <CustomizedButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <GoogleIcon />
          </CustomizedButton>
        )}
        buttonText=""
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default GoogleLogInPage
