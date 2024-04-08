import { CCProvider } from '../contexts/CartContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '../pages/About'
import Achievements from '../pages/Achievements'
import Cart from '../pages/Cart'
import ErrorPage from '../pages/ErrorPage'
import Game from '../pages/Game'
import Home from '../pages/Home'
import Library from '../pages/Library'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'game/:name/achievements',
      element: <Achievements />,
    },
    {
      path: 'cart',
      element: <Cart />,
    },
    {
      path: 'game/:name',
      element: <Game />,
    },
    {
      path: 'library',
      element: <Library />,
    }
  ])

  return (
    <CCProvider>
      <RouterProvider router={router} />
    </CCProvider>
  )
}

export default Router