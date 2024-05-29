import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterConfig from '@/router.config'
import { RouterProvider } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from '@/mui.config'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={RouterConfig} />
    </ThemeProvider>
  </React.StrictMode>,
)
