import { useEffect, useState } from 'react'
import ProductItem from './components/ProductItem'
import Pagination from './components/Pagination'

export default function App() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`)
    const data = await res.json()

    if (data && data.products) {
      setProducts(data.products)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  const visibleProducts = products.slice(page * 10 - 10, page * 10)

  return (
    <div>
      {products.length > 0 && (
        <div className="grid grid-cols-3 gap-5 m-5">
          {visibleProducts.map((prod) => (
            <ProductItem key={prod.id} prod={prod} />
          ))}
        </div>
      )}

      {/* pagination */}
      {products.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(products.length / 10)}
          onPageChange={selectPageHandler}
        />
      )}
    </div>
  )
}
