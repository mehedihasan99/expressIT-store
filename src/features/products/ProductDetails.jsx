import { useParams } from 'react-router-dom'
import useFetchProduct from '../../hooks/useFetchProduct'
import ErrorMessage from '../../ui/ErrorMessage'
import LoadingSpinner from '../../ui/LoadingSpinner'

export default function ProductDetails() {
  const { productId } = useParams()
  const { product, error } = useFetchProduct(productId)

  if (!product) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Product Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={product.images[0].secure_url}
            alt={product.name}
            className="rounded-xl shadow-xl transition-transform transform hover:scale-105 w-full max-w-lg"
          />
        </div>
        {/* Product Details */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 text-lg">{product.description}</p>
          <div className="flex items-center space-x-4">
            <p className="text-2xl text-green-600 font-semibold">
              {product.price} BDT
            </p>
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
              {product.category.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
