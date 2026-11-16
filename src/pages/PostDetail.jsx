import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.js'
import LoadingSpinner from '../components/shared/LoadingSpinner.jsx'
import ErrorMessage from '../components/shared/ErrorMessage.jsx'

function PostDetail() {
  const { id } = useParams()
  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />
  if (!post) return <p>Post not found.</p>

  return (
    <section className="post-detail">
      <Link to="/posts">← Back to Posts</Link>
      <h2>{post.title}</h2>
      <p>By Author {post.userId}</p>
      <p>{post.body}</p>
    </section>
  )
}

export default PostDetail