import Providers from './providers/Providers'
import AppRouter from './AppRouter'
import './i18n.config'
function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  )
}

export default App
