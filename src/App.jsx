import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostList from './components/PostList'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/:page' element={<PostList />} />
      </Routes>
    </BrowserRouter>
  )
}
