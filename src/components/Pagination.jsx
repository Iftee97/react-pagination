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
      <ul className="flex items-center justify-center gap-2 list-none pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`
              px-2 py-1 rounded cursor-pointer
              ${location.pathname === `/${number}` || (location.pathname === '/' && number === 1)
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border border-blue-500'
              }`}
          >
            <Link to={`/${number}`}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
