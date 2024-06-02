import { CCProvider } from '../contexts/CartContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '../pages/About'
import Achievements from '../pages/Achievements'
import Cart from '../pages/Cart'
import ErrorPage from '../pages/ErrorPage'
import Game from '../pages/Game'
import Library from '../pages/Library'
import Shop from './Shop'
import { QCProvider } from '../contexts/QueryContext'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Shop />,
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
      <QCProvider>
        <RouterProvider router={router} />
      </QCProvider>
    </CCProvider>
  )
}

export default Router