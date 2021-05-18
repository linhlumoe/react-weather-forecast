import { toaster, ToastProps } from 'baseui/toast'

const DEFAULT_OPTIONS: ToastProps = {
  autoHideDuration: 3000,
}

export const toastMessage = {
  negative: (message: string, options?: ToastProps) => toaster.negative(message, { ...DEFAULT_OPTIONS, ...options })
}
