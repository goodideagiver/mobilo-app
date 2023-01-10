import App from '@/App'
import '@/assets/scss/style.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { type ThemeConfig, extendTheme } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

const queryClient = new QueryClient()

const container = document.getElementById('root')
const root = createRoot(container!)
const app = (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
)
root.render(app)
