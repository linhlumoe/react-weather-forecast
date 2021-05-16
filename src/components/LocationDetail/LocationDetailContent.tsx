import { FC, memo } from 'react'
import { Block } from 'baseui/block'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { H5, Label2, Label3 } from 'baseui/typography'

import { formatDateToString, formatISODateToTZString } from '../../utils/datetime'
import { getWeatherStateImageSrc } from '../../utils/weather'
import { LocationDetail } from '../../types'
import { DATE_FORMAT, TIME_FORMAT_TZ } from '../../constants/datetime'

interface LocationDetailContentProps {
  location: LocationDetail
}

const LocationDetailContent: FC<LocationDetailContentProps> = ({ location }) => {
  return (
    <>
      <Block marginBottom="scale800">
        <H5 marginBottom="scale400">{location.title}</H5>
        <Label2
          marginBottom="scale400"
        >
          Current time: {formatISODateToTZString(location.time, location.timezone)}
        </Label2>
        <Label2
          marginBottom="scale400"
        >
          Sunrise: {formatISODateToTZString(location.sun_rise, location.timezone, TIME_FORMAT_TZ)}
        </Label2>
        <Label2>
          Sunset: {formatISODateToTZString(location.sun_set, location.timezone, TIME_FORMAT_TZ)}
        </Label2>
      </Block>
      <FlexGrid
        flexGridColumnCount={[2, 2, 3, 5]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {location.consolidated_weather.map(item => (
          <FlexGridItem
            height="200px"
            key={item.id}
          >
            <Block
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#e9e9e9"
              className="rounded-md"
            >
              <Label2
                marginBottom="scale200"
              >
                {formatDateToString(new Date(item.applicable_date), DATE_FORMAT)}
              </Label2>
              <img
                className="mb-3"
                width="40px"
                height="40px"
                src={getWeatherStateImageSrc(item.weather_state_abbr)}
                alt={item.weather_state_name}
              />
              <Label3
                marginBottom="scale200"
              >
                Min temp: {Math.round(item.min_temp)}
              </Label3>
              <Label3>
                Max temp: {Math.round(item.max_temp)}
              </Label3>
            </Block>
          </FlexGridItem>
        ))}
      </FlexGrid>
    </>
  )
}

export default memo(LocationDetailContent)
