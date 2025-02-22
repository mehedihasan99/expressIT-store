import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import ErrorPage from './components/ErrorPage'
import ProductDetails from './features/products/ProductDetails'
import ProductGrid from './features/products/Products'
import StoreCreation from './features/store-creation/StoreCreation'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <StoreCreation />,
      },
      {
        path: 'products',
        element: <ProductGrid />,
      },
      {
        path: 'product/:productId',
        element: <ProductDetails />,
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
