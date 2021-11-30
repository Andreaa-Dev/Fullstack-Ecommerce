import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../misc/type'
import { useNavigate } from 'react-router-dom'
import { CustomizedLink } from '../../customizedCSS'

function GiftFinderResult() {
  let navigate = useNavigate()
  const data = useSelector((state: AppState) => state.productState.product)
  const randomNumber = Math.floor(Math.random() * 10)
  const randomProductData = data[randomNumber]

  return (
    <div>
      <CustomizedLink to={`/product/${randomProductData._id}`}>
        <img src={randomProductData.imageLink} alt="" />
      </CustomizedLink>
    </div>
  )
}

export default GiftFinderResult
