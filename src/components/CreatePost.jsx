import { useState } from 'react'

const EMPTY_FORM = { title: '', content: '' }

function CreatePost({ onCreate }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [error, setError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  function handleSubmit(e) {
    e.preventDefault() // Without this the page reloads and state is lost
    if (!form.title.trim() || !form.content.trim()) {
      setError('Title and content are required.')
      return
    }
    onCreate({ title: form.title.trim(), content: form.content.trim() })
    setForm(EMPTY_FORM)
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <h2>Create a Post</h2>
      {error && <p className="field-error" role="alert">{error}</p>}

      <label>
        Title
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Give it a title..."
        />
      </label>

      <label>
        Content
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Say a bit more..."
          rows={3}
        />
      </label>

      <button className="btn-primary" type="submit">Publish Post</button>
    </form>
  )
}

export default CreatePost