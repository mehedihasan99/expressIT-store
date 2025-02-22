import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({ product }) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      <img
        src={product.images[0].secure_url}
        alt={product.name}
        className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 truncate">{product.description}</p>
        <div className="mt-4">
          <Link
            to={`/product/${product._id}`}
            className="inline-block py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
