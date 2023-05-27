import { QueryClient, QueryClientProvider } from 'react-query'
import UserContextProvider from '../context/UserContextProvider'
import MoviesContextProvider from '../context/MoviesContextProvider'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'

import configureStore from '../redux/configureStore'
const store = configureStore()

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
function Providers({ children }) {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            <MoviesContextProvider>{children}</MoviesContextProvider>
          </UserContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </I18nextProvider>
    </Provider>
  )
}

export default Providers
