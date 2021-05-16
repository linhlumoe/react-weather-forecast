export interface WeatherStore {
  loading: boolean
  location: LocationDetail | null
}

export interface LocationFilterParams {
  query: string
}

export enum LocationType {
  City = 'City',
  RegionStateProvince = 'Region / State /Province',
  Country = 'Country',
  Continent = 'Continent'
}

export enum WeatherState {
  sn = 'Snow',
  sl = 'Sleet',
  h = 'Hail',
  t = 'Thunderstorm',
  hr = 'HeavyRain',
  lr = 'LightRain',
  s = 'Showers',
  hc = 'HeavyCloud',
  lc = 'LightCloud',
  c = 'Clear',
}

export type WeatherStateAbbr = keyof typeof WeatherState

export interface Location {
  title: string
  location_type: LocationType
  latt_long: string
  woeid: number
  distance?: number
}

export type LocationParent = Omit<Location, 'distance'>

export interface ForecastItem {
  air_pressure: number
  applicable_date: string
  created: string
  humidity: number
  id: number
  max_temp: number
  min_temp: number
  predictability: number
  the_temp: number
  visibility: number
  weather_state_abbr: WeatherStateAbbr
  weather_state_name: WeatherState
  wind_direction: string
  wind_direction_compass: string
  wind_speed: string
}

export interface LocationDetail extends Location {
  time: string
  sun_rise: string		
  sun_set: string		
  timezone_name:	string
  timezone: string
  consolidated_weather: ForecastItem[]
  parent: LocationParent
}
