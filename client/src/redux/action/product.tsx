import { Dispatch } from 'redux'
import axios from 'axios'

import {
  AddFavorite,
  AddFavoriteAction,
  FetchProduct,
  FetchProductAction,
  FetchProductById,
  FetchProductByIdAction,
  ProductType,
  SearchProduct,
  SearchProductAction,
} from '../../misc/type'

export function fetchProductSuccess(
  productData: ProductType[]
): FetchProductAction {
  return {
    type: FetchProduct,
    payload: {
      product: productData,
    },
  }
}

export function fetchProductByIdSuccess(
  productData: ProductType
): FetchProductByIdAction {
  return {
    type: FetchProductById,
    payload: {
      product: productData,
    },
  }
}

export function addFavoriteSuccess(
  favoriteProduct: ProductType
): AddFavoriteAction {
  return {
    type: AddFavorite,
    payload: {
      favoriteProduct: favoriteProduct,
    },
  }
}

export function searchProductSuccess(
  productData: ProductType
): SearchProductAction {
  return {
    type: SearchProduct,
    payload: {
      product: productData,
    },
  }
}

//redux-thunk

// fetch all product
export function fetchData() {
  return (dispatch: Dispatch) => {
    axios
      .get('http://localhost:5000/api/v1/product')
      .then((res: any) => {
        const data = res.data
        dispatch(fetchProductSuccess(data))
      })
      .catch((error) => console.log(error))
  }
}

//fetch product by category
export function fetchDataByCategory(category: string) {
  return (dispatch: Dispatch) => {
    axios
      .get(`http://localhost:5000/api/v1/product?category=${category}`)
      .then((res: any) => {
        const dataByCategory = res.data
        dispatch(fetchProductSuccess(dataByCategory))
      })
  }
}

//fetch product by id
export function fetchProductById(id: string) {
  return (dispatch: Dispatch) => {
    axios
      .get(`http://localhost:5000/api/v1/product/${id}`)
      .then((res: any) => {
        const dataById = res.data
        dispatch(fetchProductByIdSuccess(dataById))
      })
      .catch((error) => console.log(error))
  }
}

//fetch product by searching
export function fetchProductBySearch(search: string) {
  return (dispatch: Dispatch) => {
    axios
      .get(`http://localhost:5000/api/v1/product?search=${search}`)
      .then((res: any) => {
        const dataBySearch = res.data
        dispatch(searchProductSuccess(dataBySearch))
      })
  }
}
