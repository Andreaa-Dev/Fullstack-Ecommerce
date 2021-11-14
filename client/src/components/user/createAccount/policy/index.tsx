import React from 'react'
import { BoxRow } from '../../../customizedCSS'
import { policyList } from '../../../../misc/policyList'
import SubItem from './SubItem'

type ItemType = {
  name: string
}

function index() {
  policyList.map((item: ItemType) => {
    return <SubItem item={item} />
  })
}

export default index
