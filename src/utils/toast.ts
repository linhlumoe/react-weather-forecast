import { toaster, ToastProps } from 'baseui/toast'

const DEFAULT_OPTIONS: ToastProps = {
  autoHideDuration: 3000,
}

export const toastMessage = {
  positive: (message: string, options?: ToastProps) => toaster.positive(message, { ...DEFAULT_OPTIONS, ...options }),
  negative: (message: string, options?: ToastProps) => toaster.negative(message, { ...DEFAULT_OPTIONS, ...options }),
  warning: (message: string, options?: ToastProps) => toaster.warning(message, { ...DEFAULT_OPTIONS, ...options }),
}
