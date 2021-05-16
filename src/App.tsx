import { FC } from 'react'
import { ToasterContainer } from 'baseui/toast'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'

import WeatherForecast from './pages/WeatherForecast'

import * as routes from './routes'
import { withGlobalLoading } from './components/GlobalLoading'

const engine = new Styletron()

const App: FC = () => {

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ToasterContainer>
          <WeatherForecast />
        </ToasterContainer>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default withGlobalLoading(App)
