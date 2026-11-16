import PostItem from './PostItem.jsx'

function PostList({ posts, onLike, onDelete }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default PostList