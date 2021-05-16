import { FC } from 'react'
import { Block } from 'baseui/block'

import { useSelector } from 'react-redux'

import { ReduxState, WeatherStore } from '../../types'

import LocationDetailSkeleton from './LocationDetailSkeleton'
import LocationDetailContent from './LocationDetailContent'

const LocationDetail: FC = () => {
  const weather = useSelector<ReduxState, WeatherStore>(state => state.weather)

  return (
    <Block paddingTop="scale800">
      {weather.loading && <LocationDetailSkeleton />}
      {weather.location && !weather.loading && <LocationDetailContent location={weather.location} />}
    </Block>
  )
}

export default LocationDetail
