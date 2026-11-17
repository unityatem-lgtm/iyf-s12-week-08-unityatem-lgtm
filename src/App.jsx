import { useState } from 'react'
import PostList from './components/PostList.jsx'
import CreatePost from './components/CreatePost.jsx'
import { Layout } from './components/Layout.jsx'

const INITIAL_POSTS = [
  { id: 1, title: 'Getting Started with React', content: 'Components are just functions that return UI.', author: 'Ava', likes: 12, createdAt: '2026-11-10' },
  { id: 2, title: 'State vs Props', content: 'State lives inside. Props are passed down from parent.', author: 'Ben', likes: 8, createdAt: '2026-11-11' },
  { id: 3, title: 'Why Keys Matter', content: 'Keys help React know which item changed.', author: 'Cia', likes: 21, createdAt: '2026-11-12' },
]

function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS)
  const [search, setSearch] = useState('')

  function handleCreate({ title, content }) {
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: 'You',
      likes: 0,
      createdAt: new Date().toISOString().slice(0, 10),
    }
    // New post goes on top - we make a NEW array, never change old one
    setPosts((prev) => [newPost, ...prev])
  }

  function handleLike(id) {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    )
  }

  function handleDelete(id) {
    setPosts((prev) => prev.filter((post) => post.id !== id))
  }

  const visiblePosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Layout>
      <header className="header">
        <h1>CommunityHub</h1>
        <p>Lesson 16 - State, Props & Lists</p>
      </header>

      <main className="main">
        <CreatePost onCreate={handleCreate} />

        <input
          type="search"
          placeholder="Search posts by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {visiblePosts.length === 0 ? (
          <p>{search ? `No posts match "${search}"` : 'No posts yet. Write the first one.'}</p>
        ) : (
          <PostList posts={visiblePosts} onLike={handleLike} onDelete={handleDelete} />
        )}
      </main>
    </Layout>
  )
}

export default App