import { shallow, mount } from 'enzyme'
import { H5 } from 'baseui/typography'
import { render, screen } from '@testing-library/react'
import AsyncSearchSelect from './AsyncSearchSelect'
import { SelectOption } from './types'
import { OnChangeParams, Select } from 'baseui/select'
import { Input } from 'baseui/input'
import { BaseProvider, LightTheme } from 'baseui'
import { ChangeEvent } from 'react'

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

