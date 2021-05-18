import React from 'react'
import { shallow } from 'enzyme'

import LoadingOverlay from './LoadingOverlay'

describe('Test LoadingOverlay', () => {
  const wrapper = shallow(<LoadingOverlay />)

  it('render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})
