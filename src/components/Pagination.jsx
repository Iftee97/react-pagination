import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Pagination({ currentPage, postsPerPage, totalPosts }) {
  const pageNumbers = []
  const location = useLocation()
  const navigate = useNavigate()

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      navigate(`/${currentPage - 1}`)
    }
  }

  const handleNextClick = () => {
    if (currentPage < pageNumbers.length) {
      navigate(`/${currentPage + 1}`)
    }
  }

  return (
    <nav>
      <div className="flex items-center justify-center gap-2">
        {currentPage > 1 && (
          <button
            className="px-3 py-1 rounded cursor-pointer bg-white text-blue-500 border border-blue-500"
            onClick={handlePrevClick}
          >
            Prev
          </button>
        )}
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
        {currentPage < pageNumbers.length && (
          <button
            onClick={handleNextClick}
            className="px-3 py-1 rounded cursor-pointer bg-white text-blue-500 border border-blue-500"
          >
            Next
          </button>
        )}
      </div>
    </nav>
  )
}
