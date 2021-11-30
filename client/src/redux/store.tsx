import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { AppState } from '../misc/type'
import createRootReducer from './reducer'

const initState: AppState = {
  productState: {
    product: [],
    productById: null,
    favoriteProduct: [],
  },
  userState: {
    userById: null,
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

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
