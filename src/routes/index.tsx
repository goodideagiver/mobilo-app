import NotFound from '@/pages/NotFound'
import { RouteObject } from 'react-router-dom'

export default [
  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[]
