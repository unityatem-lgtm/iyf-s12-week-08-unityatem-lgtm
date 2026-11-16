function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message" role="alert">
      <p>⚠️ {message}</p>
      {onRetry && (
        <button className="btn-primary" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorMessage