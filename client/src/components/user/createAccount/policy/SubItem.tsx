import React from 'react'

import { BoxRow, CustomizedText } from '../../../customizedCSS'
import Checkboxes from './CheckBox'

type ItemPropType = {
  name: string
}

function SubItem(item: ItemPropType) {
  return (
    <div>
      <Checkboxes />
      <CustomizedText> {item.name}</CustomizedText>
    </div>
  )
}

export default SubItem
