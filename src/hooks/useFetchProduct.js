import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function useFetchProduct() {
  const { productId } = useParams() // Get product id from the URL
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios
      .get('https://glore-bd-backend-node-mongo.vercel.app/api/product')
      .then((response) => {
        // Ensure data exists and filter by id
        const foundProduct = response.data.data.find((p) => p._id === productId)
        setProduct(foundProduct)
      })
      .catch((error) => {
        console.error('Error fetching product:', error)
      })
  }, [productId])

  return product
}

export default useFetchProduct
