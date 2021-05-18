import React from 'react'
import { shallow } from 'enzyme'

import LoadingTrigger from './LoadingTrigger'
import withGlobalLoading from './withGlobalLoading'

function TestComponent() {
  return <div>Test</div>;
}

describe('Test withGlobalLoading', () => {
  const WrappedComponent = withGlobalLoading(TestComponent)
  const wrapper = shallow(<WrappedComponent />)

  it('render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})
