import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Pagination({ postsPerPage, totalPosts }) {
  const pageNumbers = []
  const location = useLocation()

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <span className="flex items-center justify-center gap-2">
        {pageNumbers.map((number) => (
          <Link
            key={number}
            to={`/${number}`}
            className={`
              px-3 py-1 rounded cursor-pointer
              ${location.pathname === `/${number}` || (location.pathname === '/' && number === 1)
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border border-blue-500'
              }`}
          >
            {number}
          </Link>
        ))}
      </span>
    </nav>
  )
}
