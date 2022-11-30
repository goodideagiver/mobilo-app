import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App'
import '@/assets/scss/style.scss'

import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'

const container = document.getElementById('root')
const root = createRoot(container!)
const app = (
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
)
root.render(app)
