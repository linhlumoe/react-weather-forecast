import React from 'react'
import { shallow } from 'enzyme'

import LoadingTrigger from './LoadingTrigger'

describe('Test LoadingTrigger', () => {
  const wrapper = shallow(<LoadingTrigger />)

  it('render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})
