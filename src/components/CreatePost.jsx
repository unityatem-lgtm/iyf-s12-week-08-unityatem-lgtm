import { useForm } from '../hooks/useForm.js'
import { useToggle } from '../hooks/useToggle.js'

const validate = (values) => {
  const errors = {}
  if (!values.title.trim()) errors.title = 'Title is required'
  else if (values.title.length > 60) errors.title = 'Keep titles under 60 characters'
  if (!values.content.trim()) errors.content = 'Content is required'
  return errors
}

function CreatePost({ onAddPost }) {
  const { values, errors, touched, handleChange, handleBlur, validateAll, reset } =
    useForm({ title: '', content: '' }, validate)

  const { value: showPreview, toggle: togglePreview } = useToggle(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateAll()) return
    onAddPost({ title: values.title, content: values.content })
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Post</h3>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.title && errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.content && errors.content && <p style={{ color: 'red' }}>{errors.content}</p>}

      <button type="button" onClick={togglePreview}>
        {showPreview ? 'Hide Preview' : 'Show Preview'}
      </button>
      {showPreview && <p><b>Preview:</b> {values.content || 'Nothing to preview'}</p>}

      <button type="submit">Publish</button>
    </form>
  )
}

export default CreatePost