import { combineReducers } from 'redux'

import weatherReducer from './weather/reducer'

const appReducer = combineReducers({
  weather: weatherReducer
})

export default appReducer
