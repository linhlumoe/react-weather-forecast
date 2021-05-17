import React from 'react'
import { shallow, mount, render } from 'enzyme'
import * as redux from 'react-redux'
import configureStore from 'redux-mock-store'

import LocationSelect from './LocationSelect'
import AsyncSearchSelect from '../AsyncSearchSelect'

describe('Test LocationSelect', () => {
  const fetchLocationsMock = jest.fn()
  fetchLocationsMock.mockResolvedValue([{ woeid: 100, title: 'test location' }])

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
})
