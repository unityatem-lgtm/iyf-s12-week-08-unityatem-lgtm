export function Button({ children, variant = 'primary', ...props }) {
  const style = {
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    background: variant === 'primary' ? '#2563eb' : '#e5e7eb',
    color: variant === 'primary' ? 'white' : 'black',
  }
  return <button style={style} {...props}>{children}</button>
}