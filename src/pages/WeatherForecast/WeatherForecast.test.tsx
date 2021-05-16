import { shallow } from 'enzyme'
import { H5 } from 'baseui/typography'

import LocationSelect from '../../components/LocationSelect'
import LocationDetail from '../../components/LocationDetail'

import WeatherForecast from './WeatherForecast'

describe('Test WeatherForecast', () => {
  const wrapper = shallow(<WeatherForecast />)

  it('render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('render header', () => {
    expect(wrapper.contains(<H5 marginBottom="scale400">Please choose location</H5>)).toBe(true)
  })

  it('render LocationSelect', () => {
    expect(wrapper.find(LocationSelect)).toHaveLength(1)
  })

  it('render LocationDetail', () => {
    expect(wrapper.find(LocationDetail)).toHaveLength(1)
  })
})

