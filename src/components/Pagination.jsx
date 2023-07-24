import React from 'react'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center my-12">
      <span
        className={`py-[12px] px-[16px] border cursor-pointer ${currentPage > 1 ? '' : 'opacity-0'}`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ◀
      </span>
      {[...Array(totalPages)].map((_, i) => (
        <span
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`py-[12px] px-[16px] border cursor-pointer ${currentPage === i + 1 ? 'bg-gray-300' : ''}`}
        >
          {i + 1}
        </span>
      ))}
      <span
        className={`py-[12px] px-[16px] border cursor-pointer ${currentPage < totalPages ? '' : 'opacity-0'}`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ▶
      </span>
    </div>
  )
}
