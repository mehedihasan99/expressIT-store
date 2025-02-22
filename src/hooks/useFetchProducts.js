import axios from 'axios'
import { useEffect, useState } from 'react'

function useFetchProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch product data from the API
    setLoading(true)
    setError(null)
    axios
      .get(`${import.meta.env.VITE_API_PRODUCT_URL}`)
      .then((response) => {
        setProducts(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        setError('Failed to fetch products')
        setLoading(false)
      })
  }, [])

  return { products, loading, error }
}

export default useFetchProducts
