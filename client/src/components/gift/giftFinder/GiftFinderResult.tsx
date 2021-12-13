import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../misc/type'
import { CustomizedLink } from '../../customizedCSS'

function GiftFinderResult() {
  const data = useSelector((state: AppState) => state.productState.product)

  let randomNumber = 1
  randomNumber = Math.floor(Math.random() * 10)
  const randomProductData = data[randomNumber]
  return (
    <div>
      <CustomizedLink to={`/product/${randomProductData._id}`}>
        <img src={randomProductData.imageLink} alt={randomProductData.name} />
      </CustomizedLink>
    </div>
  )
}

export default GiftFinderResult
