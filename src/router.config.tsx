import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import Index from '@/pages/index'

const routes: {
  path: string
  element: React.ReactElement
}[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/about',
    element: <div>About us!</div>,
  },
]

const router = createBrowserRouter(routes)

export default router
