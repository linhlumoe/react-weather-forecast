import React from 'react'
import { shallow } from 'enzyme'

import * as redux from 'react-redux'
import configureStore from 'redux-mock-store'

import LocationDetail from './LocationDetail'
import LocationDetailSkeleton from './LocationDetailSkeleton'
import LocationDetailContent from './LocationDetailContent'
import { LocationDetail as LocationDetailType } from '../../types'

describe('Test LocationDetail', () => {
  const mockLocation: LocationDetailType = {
    consolidated_weather: [
      {
        id: 5448637707452416,
        weather_state_name: 'Heavy Rain',
        weather_state_abbr: 'hr',
        wind_direction_compass: 'SE',
        created: '2021-05-18T10:12:48.972561Z',
        applicable_date: '2021-05-18',
        min_temp: 26.405,
        max_temp: 33.855000000000004,
        the_temp: 32.635,
        wind_speed: 5.227832384135317,
        wind_direction: 142.1998641585236,
        air_pressure: 1009,
        humidity: 68,
        visibility: 12.842189115565098,
        predictability: 77,
      },
      {
        id: 5666882074968064,
        weather_state_name: 'Heavy Rain',
        weather_state_abbr: 'hr',
        wind_direction_compass: 'S',
        created: '2021-05-18T10:12:51.451452Z',
        applicable_date: '2021-05-19',
        min_temp: 26.604999999999997,
        max_temp: 35.47,
        the_temp: 33.465,
        wind_speed: 5.046554981701529,
        wind_direction: 172.46598730573248,
        air_pressure: 1008,
        humidity: 64,
        visibility: 12.591776525093454,
        predictability: 77,
      },
      {
        id: 6599015975092224,
        weather_state_name: 'Heavy Rain',
        weather_state_abbr: 'hr',
        wind_direction_compass: 'SSW',
        created: '2021-05-18T10:12:54.504418Z',
        applicable_date: '2021-05-20',
        min_temp: 26.8,
        max_temp: 35.615,
        the_temp: 32.515,
        wind_speed: 6.075179571165727,
        wind_direction: 199.483561768163,
        air_pressure: 1008,
        humidity: 68,
        visibility: 11.388801896921976,
        predictability: 77,
      },
      {
        id: 5103932121546752,
        weather_state_name: 'Heavy Rain',
        weather_state_abbr: 'hr',
        wind_direction_compass: 'SW',
        created: '2021-05-18T10:12:57.495247Z',
        applicable_date: '2021-05-21',
        min_temp: 26.815,
        max_temp: 34.365,
        the_temp: 32.05,
        wind_speed: 7.075952750401655,
        wind_direction: 213.8518016204599,
        air_pressure: 1007,
        humidity: 70,
        visibility: 12.071999522786925,
        predictability: 77,
      },
      {
        id: 6377734612713472,
        weather_state_name: 'Heavy Rain',
        weather_state_abbr: 'hr',
        wind_direction_compass: 'WSW',
        created: '2021-05-18T10:13:00.778911Z',
        applicable_date: '2021-05-22',
        min_temp: 26.15,
        max_temp: 31.340000000000003,
        the_temp: 29.705,
        wind_speed: 8.645301119748668,
        wind_direction: 241.01241222105557,
        air_pressure: 1007,
        humidity: 79,
        visibility: 11.909200270420744,
        predictability: 77,
      }
    ],
    time: '2021-05-18T19:22:06.677174+07:00',
    sun_rise: '2021-05-18T05:30:33.114026+07:00',
    sun_set: '2021-05-18T18:08:58.467187+07:00',
    timezone_name: 'LMT',
    sources: [
      { title: 'BBC', slug: 'bbc', url: 'http://www.bbc.co.uk/weather/', crawl_rate: 360 },
      { title: 'Forecast.io', slug: 'forecast-io', url: 'http://forecast.io/', crawl_rate: 480 },
      { title: 'Met Office', slug: 'met-office', url: 'http://www.metoffice.gov.uk/', crawl_rate: 180 },
      { title: 'OpenWeatherMap', slug: 'openweathermap', url: 'http://openweathermap.org/', crawl_rate: 360 },
      {
        title: 'World Weather Online',
        slug: 'world-weather-online',
        url: 'http://www.worldweatheronline.com/',
        crawl_rate: 360,
      },
    ],
    title: 'Ho Chi Minh City',
    woeid: 1252431,
    latt_long: '10.759180,106.662498',
    timezone: 'Asia/Ho_Chi_Minh',
  }
  
  const weatherInitState = {
    weather: {
      loading: false,
      location: null
    }
  }

  let wrapper
  let useEffect
  let store

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  }

  beforeEach(() => {
    store = configureStore([])(weatherInitState)

    useEffect = jest.spyOn(React, 'useEffect')
    mockUseEffect() // important to do it twice
    mockUseEffect()

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(state => store.getState().weather)

    jest
      .spyOn(redux, "useDispatch")
      .mockImplementation(() => store.dispatch)

    wrapper = shallow(<LocationDetail store={store} />)
  })

  it('render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('render LocationDetailSkeleton if fetching weather', () => {
    store = configureStore([])({
      weather: {
        loading: true,
        location: null
      }
    })
    wrapper = shallow(<LocationDetail store={store} />)
    expect(wrapper.find(LocationDetailSkeleton)).toHaveLength(1)
  })

  it('render LocationDetailContent if fetching weather successfully', () => {
    store = configureStore([])({
      weather: {
        loading: false,
        location: mockLocation
      }
    })
    wrapper = shallow(<LocationDetail store={store} />)
    expect(wrapper.find(LocationDetailContent)).toHaveLength(1)
  })
})
