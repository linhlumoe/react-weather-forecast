import { FC } from 'react'
import { Skeleton } from 'baseui/skeleton'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import times from 'lodash/times'
import { uniqueId } from 'lodash'
import { Block } from 'baseui/block'

const LocationDetailSkeleton: FC = () => {
  return (
    <>
      <Block marginBottom="scale800">
        <Skeleton
          rows={4}
          width="300px"
          overrides={{
            Row: {
              style: {
                height: '20px',
                marginBottom: '15px',
              },
            },
          }}
          animation
        />
      </Block>
      <FlexGrid
        flexGridColumnCount={[2, 2, 3, 5]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {times(5, () => (
          <FlexGridItem
            height="200px"
            key={uniqueId('skeketon')}
          >
            <Skeleton
              height="200px"
              animation
            />
          </FlexGridItem>
        ))}
      </FlexGrid>
    </>
  )
}

export default LocationDetailSkeleton
