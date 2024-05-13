import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'

import Index from './pages/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <div>About us!</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
