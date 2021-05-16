import GlobalLoading from './GlobalLoading'

export const getDisplayName = <T extends any = any>(WrappedComponent: React.ComponentType<T>): string => {
  return WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component'
}

const withGlobalLoading = <T extends object>(Component: React.ComponentType<T>) => {
  const comp = (props: T) => (
    <GlobalLoading>
      <Component {...props} />
    </GlobalLoading>
  )
  comp.displayName = `WithGlobalLoading(${getDisplayName(Component)})`

  return comp
}

export default withGlobalLoading
