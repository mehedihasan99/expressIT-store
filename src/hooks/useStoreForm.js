import axios from 'axios'
import { useState } from 'react'
import { validateForm } from '../utils/validation'

function useStoreForm() {
  const [formData, setFormData] = useState({
    name: '',
    domain: '',
    country: 'Bangladesh',
    category: 'Fashion',
    currency: 'BDT',
    email: '',
  })
  const [isChecking, setIsChecking] = useState(false)
  const [isAvailable, setIsAvailable] = useState(null)
  const [error, setError] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const checkDomain = async () => {
    if (!formData.domain) {
      setError({ ...error, domain: 'Please enter a valid domain' })
      return
    }
    setIsChecking(true)
    setError({ ...error, domain: '' })

    try {
      const res = await axios.get(
        `https://interview-task-green.vercel.app/task/domains/check/${formData.domain}.expressitbd.com`
      )
      setIsAvailable(res.data)
    } catch (err) {
      setError({ ...error, domain: 'Not Available Domain, Re-enter!' })
    } finally {
      setIsChecking(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm(formData, setError)) return
    if (isAvailable === true) {
      setError({
        ...error,
        domain: 'Domain is already taken. Choose another.',
      })
      return
    }
    try {
      await axios.post(
        'https://interview-task-green.vercel.app/task/stores/create',
        { ...formData, domain: formData.domain }
      )
      alert('Store created successfully!')
    } catch (err) {
      setError({ ...error, submit: 'Error creating store. Please try again.' })
    }
  }

  return {
    formData,
    isChecking,
    isAvailable,
    error,
    handleChange,
    checkDomain,
    handleSubmit,
  }
}

export default useStoreForm
