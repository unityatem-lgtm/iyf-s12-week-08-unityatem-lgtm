import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.js'
import LoadingSpinner from '../components/shared/LoadingSpinner.jsx'
import ErrorMessage from '../components/shared/ErrorMessage.jsx'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
  const { data: posts, loading, error } = useFetch(POSTS_URL)
  const [search, setSearch] = useState('')

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />
  if (!posts || posts.length === 0) return <p>No posts found.</p>

  const visible = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section>
      <h2>All Posts</h2>
      <input
        type="search"
        placeholder="Search posts by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {visible.length === 0 ? (
        <p>No posts match "{search}"</p>
      ) : (
        <div className="post-list">
          {visible.slice(0, 20).map((post) => (
            <article key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.body.slice(0, 100)}...</p>
              <Link to={`/posts/${post.id}`}>Read more →</Link>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Posts