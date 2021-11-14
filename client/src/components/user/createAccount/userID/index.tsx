import React from 'react'
import { BoxRow } from '../../../customizedCSS'

import EmailAccount from './EmailAccount'
import PasswordAccount from './PasswordAccount'

function index() {
  return (
    <BoxRow>
      <EmailAccount />
      <PasswordAccount />
    </BoxRow>
  )
}

export default index
