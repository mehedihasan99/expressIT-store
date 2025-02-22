import React from 'react'

export default function ErrorMessage({ message }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="text-red-500 text-lg">{message}</span>
    </div>
  )
}
