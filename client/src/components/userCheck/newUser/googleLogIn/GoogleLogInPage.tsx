import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import GoogleLogIn from 'react-google-login'
import GoogleIcon from '@mui/icons-material/Google'
import { CustomizedButton } from '../../../customizedCSS'

function GoogleLogInPage() {
  let navigate = useNavigate()
  const responseGoogle = async (response: any) => {
    let res = await axios.post('/user/google-authenticate', {
      id_token: response.tokenObj.id_token,
    })

    const userId = res.data.userGoogleData._id
    if (res.status === 200) {
      navigate(`/account/${userId}`)
      const userToken = res.data.token
      localStorage.setItem('userToken', userToken)
    }
  }

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
