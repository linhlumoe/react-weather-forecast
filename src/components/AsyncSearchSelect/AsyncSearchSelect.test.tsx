import { shallow } from 'enzyme'
import AsyncSearchSelect from './AsyncSearchSelect'
import { OnChangeParams, Select } from 'baseui/select'

describe('Test AsyncSearchSelect', () => {
  const fetchItemsMock = jest.fn().mockResolvedValue([])
  const onSelectedItemChangeMock = jest.fn()

  const props = {
    fetchItems: fetchItemsMock,
    onSelectedItemChange: onSelectedItemChangeMock
  }

  const wrapper = shallow(<AsyncSearchSelect {...props} />)

  it('render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('render Select', () => {
    expect(wrapper.find(Select)).toHaveLength(1)
  })

  it('invoke onSelectedItemChangeMock when option is selected', () => {
    const selectWrapper = wrapper.find(Select).shallow()
    // @ts-ignore
    selectWrapper.prop('onChange')({ value: [{ value: '', label: '' }] } as OnChangeParams)
    
    expect(onSelectedItemChangeMock).toBeCalled()
  })
})
