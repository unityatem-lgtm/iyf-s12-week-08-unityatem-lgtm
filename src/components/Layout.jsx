import { Link, NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="logo">CommunityHub</Link>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 CommunityHub. Built by IYF Season 12.</p>
      </footer>
    </div>
  )
}

export default Layout