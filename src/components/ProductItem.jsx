import React from 'react'

export default function ProductItem({ prod }) {
  return (
    <div className="p-20 bg-gray-300 text-center rounded cursor-pointer">
      <img src={prod.thumbnail} alt={prod.title} className="w-full h-full object-cover mb-3" />
      <span className='text-xl font-medium'>{prod.title}</span>
    </div>
  )
}
