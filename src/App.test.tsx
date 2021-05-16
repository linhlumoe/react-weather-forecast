import { shallow } from 'enzyme'
import App from './App'

describe('Test App', () => {
  const wrapper = shallow(<App />)

  it('render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})
