import { Dispatch } from 'redux'
import axios from 'axios'

import { FetchProduct, FetchProductAction, ProductType } from '../../misc/type'

export function fetchProduct(productData: ProductType[]): FetchProductAction {
  return {
    type: FetchProduct,
    payload: {
      product: productData,
    },
  }
}

//redux-thunk
export function fetchData() {
  return (dispatch: Dispatch) => {
    axios
      .get('http://localhost:5000/api/v1/product')
      .then((res: any) => {
        const data = res.data
        dispatch(fetchProduct(data))
      })
      .catch((error) => console.log(error))
  }
}