import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { GET_USER, SET_USER } from '@app/actions/user'

const userReducer = (state = {
    // Initial state
    initialVar: 'test'
}, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        ...action
      }
    case SET_USER:
      return {
        ...state,
        ...action
      }
    default:
      return state
  }
}

const loggerMiddleware = createLogger()

const userStore = createStore(
  /*
  For multiple Reducers
  combineReducers({
    userReducer,
  }),
  */
  userReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
)

export default userStore
