import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { Button, Input } from '@nextui-org/react'

function LoginForm () {
  const [formData, setFormData] = useState({
    identifier: 'clement@clement.fr',
    password: '123456'
  })

  const navigate = useNavigate()

  const { state: { user, jwt, error, loading }, login } = useAuth()

  useEffect(() => {
    if (user && jwt) {
      navigate('/dashboard')
    }
  }, [user, jwt])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formData)
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <h2 className='text-3xl font-semibold'>Se connecter</h2>
      <Input
        type='email'
        name='identifier'
        label='Email : '
        placeholder='mail@provider.com'
        value={formData.identifier}
        onChange={handleChange}
      />
      <Input
        type='password'
        name='password'
        label='Mot de passe : '
        placeholder='*********'
        value={formData.password}
        onChange={handleChange}
      />
      {
        error && <p style={{ color: 'red' }}>{error}</p>
      }
      <Button
        isLoading={loading}
        type='submit'
        color='primary'
        className='w-fit'
      >
        Se connecter
      </Button>
    </form>
  )
}

export default LoginForm
