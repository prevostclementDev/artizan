import { useState } from 'react'

import { validateRegisterForm } from '../../services/formAuthValidation'
import { toast } from 'react-toastify'
import { Button, Input } from '@nextui-org/react'
import {useAuth} from "../../contexts/authContext.jsx";

function RegisterForm () {
  // Version simple
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null
  })

  const [formData, setFormData] = useState({
    firstName: 'prevost',
    lastName: 'clement',
    username: 'test56',
    email: 'clement@clement.fr',
    password: '123456'
  })

  const { state: { error, loading }, register } = useAuth()

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const _errors = validateRegisterForm(formData)
    if ( Object.keys(_errors).length > 0 ) {
      setErrors(_errors)
    } else {
        register(formData)
    }
  }

  return (
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <h2 className='text-3xl font-semibold'>S'enregistrer</h2>
          <Input
              name='lastName'
              label='Nom : '
              placeholder='Entrez votre nom...'
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
          />
          <Input
              name='firstName'
              label='Prénom : '
              placeholder='Entrez votre prénom...'
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
          />
          <Input
              name='username'
              label="Nom d'utilisateur : "
              placeholder="Entrez votre nom d'utilisateur..."
              value={formData.username}
              onChange={handleChange}
          />
          <Input
              name='email'
              label='Email : '
              placeholder='Entrez votre adresse email...'
              value={formData.email}
              onChange={handleChange}
          />
          <Input
              name='password'
              label='Mot de passe : '
              placeholder='Entrez un mot de passe...'
              value={formData.password}
              onChange={handleChange}
          />

          {
              error && <p style={{color: 'red'}}>{error}</p>
          }

          <Button
              type='submit'
              color='primary'
              isLoading={loading}
              className='w-fit'
          >
              S'enregistrer
          </Button>
      </form>
  )
}

export default RegisterForm
