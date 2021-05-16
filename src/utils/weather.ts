import { METAWEATHER_DOMAIN } from '../constants/common'

import { WeatherStateAbbr } from '../types'

export const getWeatherStateImageSrc = (abbreviation: WeatherStateAbbr) => {
  return `${METAWEATHER_DOMAIN}/static/img/weather/${abbreviation}.svg`
}
