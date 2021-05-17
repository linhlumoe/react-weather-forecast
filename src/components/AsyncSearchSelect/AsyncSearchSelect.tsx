import { FC, useState, useCallback, ChangeEvent, useEffect } from 'react'
import { OnChangeParams, Select, Value } from 'baseui/select'
import debounce from 'lodash/debounce'

import { toastMessage } from '../../utils/toast'

import { SelectOption } from './types'

interface AsyncSearchSelectProps {
  fetchItems: (term: string) => Promise<SelectOption[]>
  onSelectedItemChange: (item: SelectOption | null) => void
  defaultValue?: SelectOption
}

const AsyncSearchSelect: FC<AsyncSearchSelectProps> = ({ fetchItems, onSelectedItemChange, defaultValue }) => {
  const [value, setValue] = useState<Value>([])
  const [options, setOptions] = useState<SelectOption[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSearch = useCallback(async (term: string) => {
    try {
      setIsLoading(true)
      const res = await fetchItems(term)
      setOptions(res)
    } catch (error) {
      toastMessage.negative(error.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target?.value) {
      handleSearch(event.target.value)
    }
  }, [])

  const debouncedHandleInputChange = debounce(handleInputChange, 400)

  const onChange = useCallback(async (params: OnChangeParams) => {
    setValue(params.value)
    const selectedItem = params.value[0]?.id && params.value[0]?.label
      ? { id: params.value[0].id, label: params.value[0].label as string }
      : null 
    onSelectedItemChange(selectedItem)
  }, [])

  useEffect(() => {
    if (defaultValue) {
      setValue([defaultValue])
      handleSearch(defaultValue.label)
    }
  }, [defaultValue])

  return (
    <Select
      isLoading={isLoading}
      options={options}
      onChange={onChange}
      onInputChange={debouncedHandleInputChange}
      value={value}
    />
  )
}

export default AsyncSearchSelect
