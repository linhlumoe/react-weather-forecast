import React from 'react'
import { shallow } from 'enzyme'

import GlobalLoading from './GlobalLoading'

describe('Test GlobalLoading', () => {
  const wrapper = shallow(<GlobalLoading>{}</GlobalLoading>)

  it('render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})
