import { ReduxState } from '../../types'

import { ACTION_TYPES, ActionType } from './actions'

const INIT_STATE = {
  loading: false,
  location: null
}

const weatherReducer = (state: ReduxState, action: ActionType) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_WEATHER:
      return { ...state, loading: true }
    case ACTION_TYPES.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        location: action.payload,
        loading: false
      }
    case ACTION_TYPES.FETCH_WEATHER_FAILED:
      return { ...state, location: null, loading: false }
    default:
      return state || INIT_STATE
  }
}

export default weatherReducer
