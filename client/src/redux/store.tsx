import { useEffect } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { AppState } from '../misc/type'
import createRootReducer from './reducer'

const initState: AppState = {
  productState: {
    product: [],
    productById: null,
    favoriteProduct: [],
    productRecently: [],
  },
  userState: {
    userById: null,
  },
  cartState: {
    cartData: [],
  },
}

export default function makeStore(initialState = initState) {
  const middlewares = [thunk]
  let composeEnhancers = compose
  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }
  let favoriteObject = localStorage.getItem('favoriteItem')

  let finalState
  if (favoriteObject) {
    let stored = JSON.parse(favoriteObject)
    finalState = stored
  } else {
    finalState = initState
  }
  const store = createStore(
    createRootReducer(),
    finalState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem('favoriteItem', JSON.stringify(state))
  })

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
