import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <h1>Welcome to CommunityHub</h1>
      <p>A place for IYF Season 12 developers to share posts.</p>
      <Link className="btn-primary" to="/posts">Browse Posts</Link>
    </section>
  )
}

export default Home