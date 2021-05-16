import { Block } from 'baseui/block'
import { FC, memo } from 'react'

import { H5 } from 'baseui/typography'

import LocationSelect from '../../components/LocationSelect'
import LocationDetail from '../../components/LocationDetail'

const WeatherForecast: FC = () => {
  return (
    <Block padding="scale1000">
      <H5 marginBottom="scale400">Please choose location</H5>
      <Block width={['100%', '100%', '50%', '30%']}>
        <LocationSelect />
      </Block>
      <LocationDetail />
    </Block>
  )
}

export default memo(WeatherForecast)
