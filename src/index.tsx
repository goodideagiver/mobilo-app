import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App'
import '@/assets/scss/style.scss'

import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'

import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

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
