import { Location, LocationDetail, LocationFilterParams } from '../types/weather'

import axiosInstance from './base'

export async function fetchLocations(params: LocationFilterParams) {
  const res = await axiosInstance.get<Location[]>('/api/location/search', {
    params
  })

  return res.data
}

export async function fetchWeatherForecastByLocationId(woeid: number) {
  const res = await axiosInstance.get<LocationDetail>(`/api/location/${woeid}`)

  return {
    ...res.data,
    consolidated_weather: res.data.consolidated_weather?.slice(0, 5) || []
  }
}
