function LoadingSpinner({ size = 'medium' }) {
  return (
    <div className={`loading-spinner loading-spinner--${size}`} role="status">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  )
}

export default LoadingSpinner