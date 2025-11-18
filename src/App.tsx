import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BlogPage from './Pages/BlogPage'
import BlogDetailsPage from './Pages/BlogDetailsPage'
import type { Post } from './lib/posts'
import { useState } from 'react'
import LoginPage from './Pages/LoginPage'
import AdminPage from './Pages/AdminPage'

function App() {
  const posts = [
    {
        id: 1,
        slug: "happy-birthday-mat",
        title: "Happy Birthday Mat!",
        content: "You already know it's Mat's birfday today.",
        author: "Jordan McCoy",
        datePosted: "11/13/2025"
    },
    {
        id: 2,
        slug: "happy-birthday-jen",
        title: "Happy Birthday Jen!",
        content: "You already know it's Jen's birfday today",
        author: "Jordan McCoy",
        datePosted: "11/13/2025"
    },
    {
        id: 3,
        slug: "steam-announcement",
        title: "Steam Announces sum",
        content: "on a wednesday???",
        author: "Jordan McCoy",
        datePosted: "11/13/2025"
    },
    {
        id: 4,
        slug: "whats-for-lunch",
        title: "I'm Hungry. What's For Lunch",
        content: "Will lunch even be served today?",
        author: "Jordan McCoy",
        datePosted: "11/13/2025"
    }
]
  const [blogs, setBlogs] = useState(posts)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage blogs={blogs}/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/blog/:slug' element={<BlogDetailsPage blogs={blogs}/>} />
      </Routes>
    </>
  )
}

export default App
