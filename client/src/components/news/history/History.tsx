import React from 'react'

import historyCover from '../../images/cover-histoires.jpg'
import { CustomizedTitle } from '../../customizedCSS'

function History() {
  return (
    <div>
      <CustomizedTitle>History</CustomizedTitle>
      <img src={historyCover} alt="error" width="100%" />
    </div>
  )
}

export default History
