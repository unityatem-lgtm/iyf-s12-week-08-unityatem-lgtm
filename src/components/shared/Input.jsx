export function Input({ label, error, ...props }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <label style={{ display: 'block' }}>{label}</label>
      <input style={{ width: '100%', padding: '8px' }} {...props} />
      {error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}
    </div>
  )
}