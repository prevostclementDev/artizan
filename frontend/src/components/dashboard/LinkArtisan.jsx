import {useAuth} from "../../contexts/authContext.jsx";
import { getArtisansWithUser, getMe, updateMe } from '../../services/api.js'
import {Button, Select, SelectItem, Spinner} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import PropTypes from "prop-types";
import ProductsList from "../products/ProductsList.jsx";

function LinkArtisan ({ onUserIsLink }) {

  const { state: { user, jwt }, setUserData } = useAuth()

  const [formData, setFormData] = useState({
      artisan : 0
  })
  const [response,setResponse] = useState([])

  useEffect(() => {

      const getData = async () => {
          let _response = await getArtisansWithUser()
          setResponse(_response.data)
      }

      getData()

  },[])

  const handleSubmit = async (e) => {
      e.preventDefault()

      if ( formData.artisan !== 0 ) {

          const response = await updateMe(formData,user.id)

          if ( response.id ) {
              toast.success('Liaison réussi')
              setUserData(response)
              onUserIsLink(formData.artisan)
              return;
          }

          toast.error('Une erreur est survenue')

      } else {

          toast.error('Veuillez choisir un(e) artisan')

      }

  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <h2 className='text-2xl my-2'>Lier mon compte à un artisan</h2>

        {response &&
            <div className='flex gap-3 items-stretch justify-start'>
                <Select
                    label="Lier un artisan"
                    placeholder="Choisir un artisan"
                    disabledKeys={[...response.map((artisan) => {
                        if (artisan?.attributes?.user?.data?.id) {
                            return artisan.id.toString();
                        }
                    })].filter(Boolean)}
                    className="max-w-xs"
                    onChange={ (event) => { setFormData({ ...formData, artisan : event.target.value }) } }
                >
                    {response.map((artisan) => (
                        <SelectItem key={artisan.id.toString()} value={artisan.id}>
                            {artisan.attributes.name}
                        </SelectItem>
                    ))}
                </Select>

                <Button
                    type='submit'
                    color='primary'
                    className='w-fit h-auto'
                >
                    Lier
                </Button>
            </div>
        }

    </form>
  )
}

LinkArtisan.propTypes = {
    onUserIsLink: PropTypes.func
}

export default LinkArtisan
