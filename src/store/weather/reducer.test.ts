// @ts-nocheck
import { runSaga } from 'redux-saga'
import * as weatherService from '../../services/weather'
import { LocationDetail } from '../../types'
import { toastMessage } from '../../utils/toast'
import weatherReducer, { INIT_STATE } from './reducer'
import * as actions from './actions'

describe('Test Weather reducer', () => {
  const mockData: LocationDetail = {
    consolidated_weather: [
      {
        id: 5279309963984896,
        weather_state_name: 'Light Rain',
        weather_state_abbr: 'lr',
        wind_direction_compass: 'S',
        created: '2021-05-17T15:44:03.454862Z',
        applicable_date: '2021-05-18',
        min_temp: 26.380000000000003,
        max_temp: 29.285,
        the_temp: 30.275,
        wind_speed: 6.664238980654312,
        wind_direction: 182.41700168958246,
        air_pressure: 1010.5,
        humidity: 78,
        visibility: 11.622126779607093,
        predictability: 75,
      },
      {
        id: 6628353051197440,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'SSE',
        created: '2021-05-17T15:44:05.552969Z',
        applicable_date: '2021-05-19',
        min_temp: 26.22,
        max_temp: 29.259999999999998,
        the_temp: 30.305,
        wind_speed: 8.523738278713646,
        wind_direction: 164.95679803313755,
        air_pressure: 1009.0,
        humidity: 75,
        visibility: 11.687060069195896,
        predictability: 71,
      },
      {
        id: 5401218315714560,
        weather_state_name: 'Light Rain',
        weather_state_abbr: 'lr',
        wind_direction_compass: 'SSW',
        created: '2021-05-17T15:44:09.193490Z',
        applicable_date: '2021-05-20',
        min_temp: 26.36,
        max_temp: 29.55,
        the_temp: 29.9,
        wind_speed: 8.529793135244837,
        wind_direction: 193.1573655884949,
        air_pressure: 1008.5,
        humidity: 77,
        visibility: 8.926307862085421,
        predictability: 75,
      },
      {
        id: 6527118222557184,
        weather_state_name: 'Showers',
        weather_state_abbr: 's',
        wind_direction_compass: 'SSW',
        created: '2021-05-17T15:44:11.790946Z',
        applicable_date: '2021-05-21',
        min_temp: 26.785,
        max_temp: 30.27,
        the_temp: 30.345,
        wind_speed: 8.771914464850607,
        wind_direction: 201.50003808225264,
        air_pressure: 1007.0,
        humidity: 79,
        visibility: 8.390996579972958,
        predictability: 73,
      },
      {
        id: 5027892913242112,
        weather_state_name: 'Showers',
        weather_state_abbr: 's',
        wind_direction_compass: 'S',
        created: '2021-05-17T15:44:14.682208Z',
        applicable_date: '2021-05-22',
        min_temp: 26.939999999999998,
        max_temp: 30.305,
        the_temp: 30.03,
        wind_speed: 6.511732482303349,
        wind_direction: 183.99999999999997,
        air_pressure: 1007.0,
        humidity: 81,
        visibility: 9.999726596675416,
        predictability: 73,
      },
      {
        id: 6321580851331072,
        weather_state_name: 'Showers',
        weather_state_abbr: 's',
        wind_direction_compass: 'SSE',
        created: '2021-05-17T15:44:17.533950Z',
        applicable_date: '2021-05-23',
        min_temp: 26.97,
        max_temp: 30.02,
        the_temp: 29.83,
        wind_speed: 5.829450210769108,
        wind_direction: 164.5,
        air_pressure: 1007.0,
        humidity: 81,
        visibility: 9.999726596675416,
        predictability: 73,
      },
    ],
    time: '2021-05-18T00:53:36.227120+08:00',
    sun_rise: '2021-05-18T05:41:55.062874+08:00',
    sun_set: '2021-05-18T18:57:34.813658+08:00',
    timezone_name: 'LMT',
    parent: { title: 'China', location_type: 'Country', woeid: 23424781, latt_long: '36.894451,104.165649' },
    title: 'Hong Kong',
    location_type: 'City',
    woeid: 2165352,
    latt_long: '22.411200,114.153999',
    timezone: 'Asia/Hong_Kong',
  }

  it('should return loading is true if action is FetchWeather', () => {
    const result = weatherReducer(INIT_STATE, actions.fetchWeather(100))
    expect(result.loading).toEqual(true)
  })

  it('should return loading is false, and Location is mockData if action is FetchWeatherSuccess', () => {
    const result = weatherReducer(INIT_STATE, actions.fetchWeatherSuccess(mockData))
    expect(result.loading).toEqual(false)
    expect(result.location).toEqual(mockData)
  })

  it('should return loading is false, and Location is null if action is FetchWeatherFailed', () => {
    const result = weatherReducer(INIT_STATE, actions.fetchWeatherFailed())
    expect(result.loading).toEqual(false)
    expect(result.location).toEqual(null)
  })

  it('should return state with other actions', () => {
    const result = weatherReducer(INIT_STATE, { type: 'INVALID TYPE' })
    expect(result.loading).toEqual(INIT_STATE.loading)
    expect(result.location).toEqual(INIT_STATE.location)
  })
})
