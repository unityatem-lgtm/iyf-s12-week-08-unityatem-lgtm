import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <h2>404 - Page not found</h2>
      <p>That page doesn't exist.</p>
      <Link to="/">Go Home</Link>
    </section>
  )
}

export default NotFound