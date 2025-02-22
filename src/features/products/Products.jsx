import React from 'react'
import useFetchProducts from '../../hooks/useFetchProducts'
import ErrorMessage from '../../ui/ErrorMessage'
import LoadingSpinner from '../../ui/LoadingSpinner'
import Product from './Product'

export default function ProductGrid() {
  const { products, loading, error } = useFetchProducts()
  if (loading) return <LoadingSpinner />

  if (error) return <ErrorMessage message={error} />

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}
