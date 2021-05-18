import React from 'react'
import { shallow } from 'enzyme'
import { Skeleton } from 'baseui/skeleton'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'

import LocationDetailSkeleton from './LocationDetailSkeleton'

describe('Test LocationDetailSkeleton', () => {
  const wrapper = shallow(<LocationDetailSkeleton />)

  it('render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('render Skeleton', () => {
    expect(wrapper.find(Skeleton)).toHaveLength(6)
  })

  it('render FlexGrid layout', () => {
    expect(wrapper.find(FlexGrid)).toHaveLength(1)
    expect(wrapper.find(FlexGridItem)).toHaveLength(5)
  })
})
