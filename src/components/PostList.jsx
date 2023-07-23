import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Pagination from './Pagination'

export default function PostList() {
  const { page = 1 } = useParams() // Get the page parameter from the URL path (default value is 1)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const postsPerPage = 10

  useEffect(() => {
    let isMounted = true // Flag to check if the component is mounted

    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

        // Only set the state if the component is still mounted
        if (isMounted) {
          setPosts(response.data)
          setLoading(false)
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
        // Set loading to false even if an error occurs
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchPosts()

    // Cleanup function to cancel any pending network requests and subscriptions
    return () => {
      isMounted = false
    }
  }, [])

  // Update currentPosts whenever posts or page changes
  const [currentPosts, setCurrentPosts] = useState([])

  useEffect(() => {
    const lastIndex = parseInt(page) * postsPerPage // Calculate the index of the last post on the current page
    const firstIndex = lastIndex - postsPerPage // Calculate the index of the first post on the current page
    setCurrentPosts(posts.slice(firstIndex, lastIndex)) // Get the current posts to be displayed
  }, [posts, page, postsPerPage])

  console.log('currentPosts: >>>>>>>>', currentPosts)

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        Posts
      </h1>
      <h3 className='text-xl font-semibold mb-3'>
        Page {page}
      </h3>
      {loading ? (
        <p className="text-gray-500">
          Loading...
        </p>
      ) : (
        <div>
          <ul className="space-y-2 mb-4">
            {currentPosts.map((post) => (
              <li key={post.id} className="p-2 border rounded">
                {post.id} - {post.title}
              </li>
            ))}
          </ul>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
          />
        </div>
      )}
    </div>
  )
}
