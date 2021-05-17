import { FC, useState, useCallback, useEffect } from 'react'
import toNumber from 'lodash/toNumber'
import { useDispatch } from 'react-redux'

import { toastMessage } from '../../utils/toast'
import { fetchLocations } from '../../services/weather'
import { fetchWeather } from '../../store/weather/actions'

import AsyncSearchSelect, { SelectOption } from '../AsyncSearchSelect'
import { useGlobalLoading } from '../GlobalLoading'

const LocationSelect: FC = () => {
  const dispatch = useDispatch()
  const { startGlobalLoading, endGlobalLoading } = useGlobalLoading()

  const [currentLatLong, setCurrentLatLong] = useState<GeolocationPosition>()
  const [defaultLocation, setDefaultLocation] = useState<SelectOption>()

  const getDefaultLocation = useCallback(async (position: GeolocationPosition) => {
    try {
      const res = await fetchLocations({
        lattlong: [position.coords.latitude, position.coords.longitude].join(','),
        query: ''
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
    if (navigator?.geolocation) {
      startGlobalLoading()
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        setCurrentLatLong(position)
        endGlobalLoading()
      }, () => {
        endGlobalLoading()
      })
    }
  }, [])

  useEffect(() => {
    if (currentLatLong) {
      getDefaultLocation(currentLatLong)
    }
  }, [currentLatLong])

  return (
    <AsyncSearchSelect
      defaultValue={defaultLocation}
      fetchItems={getLocations}
      onSelectedItemChange={onLocationSelect}
    />
  )
}

export default LocationSelect
