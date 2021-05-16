import { put, all, takeLatest, call } from 'redux-saga/effects'

import * as weatherService from '../../services/weather'
import { LocationDetail } from '../../types'
import { toastMessage } from '../../utils/toast'

import * as actions from './actions'

function* fetchWeatherHandler({ payload }: actions.FetchWeather ) {
  try {
    if (payload !== 0) {
      const res: LocationDetail = yield call(weatherService.fetchWeatherForecastByLocationId, payload)
      yield put(actions.fetchWeatherSuccess(res))
    } else {
      yield put(actions.fetchWeatherFailed())
    }
  } catch (error) {
    toastMessage.negative(error.message)
    yield put(actions.fetchWeatherFailed())
  }
}

function* watchFetchingWeather() {
  yield takeLatest(actions.ACTION_TYPES.FETCH_WEATHER, fetchWeatherHandler)
}

export default function* generalSagas() {
  yield all([watchFetchingWeather()])
}
