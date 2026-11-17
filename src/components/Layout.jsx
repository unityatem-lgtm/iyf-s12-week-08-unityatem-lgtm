
import { useLocalStorage } from '../hooks/useLocalStorage.js'

export function Layout({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  return (
    <div style={{ background: theme === 'dark' ? '#111' : 'white', color: theme === 'dark' ? 'white' : 'black', minHeight: '100vh' }}>
      <a href="#main">Skip to content</a>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      <main id="main">{children}</main>
    </div>
  )
}