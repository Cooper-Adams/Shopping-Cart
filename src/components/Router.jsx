import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '../pages/About'
import Cart from '../pages/Cart'
import ErrorPage from '../pages/ErrorPage'
import Game from '../pages/Game'
import Home from '../pages/Home'
import Library from '../pages/Library'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'cart',
      element: <Cart />,
    },
    {
      path: 'game',
      element: <Game />,
    },
    {
      path: 'library',
      element: <Library />,
    }
  ])

  return <RouterProvider router={router} />
}

export default Router