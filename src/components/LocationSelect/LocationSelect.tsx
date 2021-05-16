import { FC, useState, useCallback, useEffect } from 'react'
import toNumber from 'lodash/toNumber'
import { useDispatch } from 'react-redux'

import { toastMessage } from '../../utils/toast'
import { fetchLocations } from '../../services/weather'
import { fetchWeather } from '../../store/weather/actions'

import AsyncSearchSelect, { SelectOption } from '../AsyncSearchSelect'

const LocationSelect: FC = () => {
  const dispatch = useDispatch()
  const [defaultLocation, setDefaultLocation] = useState<SelectOption>()

  const getDefaultLocation = useCallback(async () => {
    try {
      const res = await fetchLocations({
        query: 'Ho Chi Minh City'
      })
      if (res.length) {
        const item = { id: res[0].woeid, label: res[0].title }
        setDefaultLocation(item)
        onLocationSelect(item)
      }
    } catch (error) {
      toastMessage.negative(error.message)
    }
  }, [])

  const getLocations = useCallback(async (term: string) => {
    const res = await fetchLocations({
      query: term
    })
    return res.map(item => ({ id: item.woeid, label: item.title }))
  }, [])

  const onLocationSelect = useCallback((item: SelectOption | null) => {
    dispatch(fetchWeather(item?.id ? toNumber(item?.id) : 0))
  }, [])

  useEffect(() => {
    getDefaultLocation()
  }, [])

  return (
    <AsyncSearchSelect
      defaultValue={defaultLocation}
      fetchItems={getLocations}
      onSelectedItemChange={onLocationSelect}
    />
  )
}

export default LocationSelect
