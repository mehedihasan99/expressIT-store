import axios from 'axios'
import { useEffect, useState } from 'react'

function useFetchProduct(productId) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!productId) return

    setLoading(true)
    setError(null)

    axios
      .get(`${import.meta.env.VITE_API_PRODUCT_URL}`)
      .then((response) => {
        // Ensure data exists and filter by id
        const foundProduct = response.data.data.find((p) => p._id === productId)
        setProduct(foundProduct)
      })
      .catch((error) => {
        setError('Failed to fetch product')
        setLoading(false)
      })
  }, [productId])

  return { product, loading, error }
}

export default useFetchProduct
