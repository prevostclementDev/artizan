import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import {useAuth} from "../../contexts/authContext.jsx";
import { updateMe } from '../../services/api.js'
import {toast} from "react-toastify";

function LoginForm ({ username, mail }) {

  const { state: { user, jwt }, setUserData } = useAuth()

  const [formData, setFormData] = useState({
      ...user
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await updateMe(formData)

        if ( response.id ) {
            toast.success('Enregistrement réussi')
            setUserData(response)
            return;
        }

        toast.error('Une erreur est survenue')

    }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <h2 className='text-2xl my-2'>Modifier les informations de mon profil</h2>

        <Input
            name='lastName'
            label='Nom : '
            placeholder='Entrez votre nom...'
            value={formData.lastName}
            onChange={handleChange}
        />
        <Input
            name='firstName'
            label='Prénom : '
            placeholder='Entrez votre prénom...'
            value={formData.firstName}
            onChange={handleChange}
        />

      <Input
        type='text'
        name='username'
        label='Username : '
        placeholder='clement94'
        value={formData.username}
        onChange={handleChange}
      />

      <Input
        type='email'
        name='email'
        label='Email : '
        placeholder='test@test.com'
        value={formData.email}
        onChange={handleChange}
      />

      <Button
        type='submit'
        color='primary'
        className='w-fit'
      >
        Enregistrer
      </Button>
    </form>
  )
}

export default LoginForm
