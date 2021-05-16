import * as React from 'react'
import * as ReactDOM from 'react-dom'

import LoadingIndicator from './LoadingIndicator'

const LoadingOverlay: React.FC = () => {
  const root = document.getElementById('root') || document.getElementsByTagName('body')[0]
  return (
    ReactDOM.createPortal(
      <LoadingIndicator />,
      root
    )
  )
}

export default React.memo(LoadingOverlay)
