export const validateForm = (formData, setError) => {
  let newErrors = {}
  if (formData.name.length < 3) {
    newErrors.name = 'Store name must be at least 3 characters long'
  }
  if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    newErrors.email = 'Invalid email format!'
  }
  setError(newErrors)
  return Object.keys(newErrors).length === 0
}
