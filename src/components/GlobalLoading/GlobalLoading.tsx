import { memo, useMemo, useState } from 'react'

import LoadingOverlay from './LoadingOverlay'
import LoadingContext from './LoadingContext'

interface GlobalLoadingProps {
  children: React.ReactNode
}

const GlobalLoading: React.FC<GlobalLoadingProps> = ({ children }) => {
  const [counter, setCounter] = useState<number>(0)

  const contextValues = useMemo(() => ({
    startLoading: () => setCounter(prev => prev + 1),
    endLoading: () => setCounter(prev => Math.max(prev - 1, 0))
  }), [])

  return (
    <LoadingContext.Provider value={contextValues}>
      {counter > 0 && <LoadingOverlay />}
      {children}
    </LoadingContext.Provider>
  )
}

export default memo(GlobalLoading)
