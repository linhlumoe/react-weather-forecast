import { LocationDetail } from '../../types'

export enum ACTION_TYPES {
  FETCH_WEATHER = 'weather/FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS = 'weather/FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_FAILED = 'weather/FETCH_WEATHER_FAILED'
}

export const fetchWeather = (woeid: number) => ({
  type: ACTION_TYPES.FETCH_WEATHER,
  payload: woeid
})

export const fetchWeatherSuccess = (payload: LocationDetail) => ({
  type: ACTION_TYPES.FETCH_WEATHER_SUCCESS,
  payload: payload,
})

export const fetchWeatherFailed = () => ({
  type: ACTION_TYPES.FETCH_WEATHER_FAILED,
})

export interface FetchWeather {
  type: ACTION_TYPES.FETCH_WEATHER
  payload: number
}

export interface FetchWeatherSuccess {
  type: ACTION_TYPES.FETCH_WEATHER_SUCCESS
  payload: LocationDetail
}

export interface FetchWeatherFailed {
  type: ACTION_TYPES.FETCH_WEATHER_FAILED
}

export type ActionType = FetchWeather | FetchWeatherSuccess | FetchWeatherFailed
