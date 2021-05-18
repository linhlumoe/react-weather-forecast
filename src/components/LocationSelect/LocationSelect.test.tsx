import React from 'react'
import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import configureStore from 'redux-mock-store'

import * as weatherService from '../../services/weather'
import * as actions from '../../store/weather/actions'

import LocationSelect from './LocationSelect'
import AsyncSearchSelect from '../AsyncSearchSelect'

describe('Test LocationSelect', () => {
  const fetchLocationsMock = jest.spyOn(weatherService, 'fetchLocations').mockResolvedValue([])
  // const fetchWeatherMock = jest.spyOn(actions, 'fetchWeather').mockReturnValue({ type: actions.ACTION_TYPES.FETCH_WEATHER, payload: 100 })

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
    store = configureStore()(weatherInitState)

    useEffect = jest.spyOn(React, 'useEffect')
    mockUseEffect() // important to do it twice
    mockUseEffect()

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(state => store.getState())

    jest
      .spyOn(redux, "useDispatch")
      .mockImplementation(() => store.dispatch)

    wrapper = shallow(<LocationSelect store={store} />)
  })


  it('render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('render AsyncSearchSelect', () => {
    expect(wrapper.find(AsyncSearchSelect)).toHaveLength(1)
  })

  it('call fetchLocations api if fetchItems prop has been called', async () => {
    const asyncSearchSelectWrapper = wrapper.find(AsyncSearchSelect)

    asyncSearchSelectWrapper.prop('fetchItems')('test')
  
    expect(fetchLocationsMock).toBeCalled()
  })

  it('call fetchLocations api if fetchItems prop has been called', async () => {
    const asyncSearchSelectWrapper = wrapper.find(AsyncSearchSelect)

    asyncSearchSelectWrapper.prop('onSelectedItemChange')({ id: 100, label: 'Ho Chi Minh City' })

    const expectedActions = [{
      payload: 100,
      type: actions.ACTION_TYPES.FETCH_WEATHER
    }]
    expect(store.getActions()).toEqual(expectedActions)
  })
})
