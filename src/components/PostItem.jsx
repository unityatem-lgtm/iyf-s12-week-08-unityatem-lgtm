import LikeButton from './LikeButton.jsx'

function PostItem({ post, onLike, onDelete }) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      <p className="post-meta">By {post.author} • {post.createdAt}</p>
      <p>{post.content}</p>

      <div className="post-actions">
        <LikeButton likes={post.likes} onLike={() => onLike(post.id)} />
        <button className="btn-danger" onClick={() => onDelete(post.id)}>
          Delete
        </button>
      </div>
    </article>
  )
}

export default PostItem