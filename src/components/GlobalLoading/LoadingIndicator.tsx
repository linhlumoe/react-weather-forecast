import { memo } from 'react'
import './LoadingIndicator.scss'

const LoadingIndicator: React.FC = () => {

  return (
    <div className="inset-0 absolute z-99999 flex items-center justify-center h-screen w-screen">
      <div className="fixed bg-white opacity-50 inset-0" />
      <div className="spinner" />
    </div>
  )
}

export default memo(LoadingIndicator)
