function LikeButton({ likes, onLike }) {
  return (
    <button className="btn-like" onClick={onLike} aria-label="Like post">
      ❤️ {likes} {likes === 1 ? 'Like' : 'Likes'}
    </button>
  )
}

export default LikeButton