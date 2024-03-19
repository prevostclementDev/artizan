import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './inputs/Input'
import Button from './buttons/Button'
import './Form.css'
import { useAuth } from '../../contexts/authContext'

function LoginForm () {
  const [formData, setFormData] = useState({
    identifier: 'jeanmich@mail.com',
    password: 'jeanmich'
  })

  const navigate = useNavigate()

  const { state: { user, jwt, error }, login } = useAuth()

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
    <form className='form-container' onSubmit={handleSubmit}>
      <h2>SE CONNECTER</h2>
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
        placeholder=''
        value={formData.password}
        onChange={handleChange}
      />
      {
        error && <p style={{ color: 'red' }}>{error}</p>
      }
      <Button
        type='submit'
      >
        Se connecter
      </Button>
    </form>
  )
}

export default LoginForm
