import React from 'react'
import { shallow } from 'enzyme'

import LoadingIndicator from './LoadingIndicator'

describe('Test LoadingIndicator', () => {
  const wrapper = shallow(<LoadingIndicator />)

  it('render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})
