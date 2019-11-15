import { combineReducers } from 'redux'
import { authReducer, appReducer } from 'shared/reducers'

export default combineReducers({
  auth: authReducer,
  data: appReducer
})