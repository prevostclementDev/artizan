import {useAuth} from "../../contexts/authContext.jsx";
import { getArtisansWithUser, getMe } from '../../services/api.js'
import {Select, SelectItem, Spinner} from "@nextui-org/react";
import {useEffect, useState} from "react";
import LinkArtisan from "./LinkArtisan.jsx";
import ArtisanHeader from "../artisan/ArtisanHeader.jsx";
import ArtisanManagement from "./ArtisanManagement.jsx";

function ArtisanSpace () {

  const { state: { user, jwt } } = useAuth()

  const [reloadEffect, setRelaoadEffect] = useState(false)
  const [artisan, setArtisan] = useState({})

  useEffect(() => {

      const getData = async () => {
          let _response = await getMe(jwt)
          setArtisan(_response.artisan)
      }

      getData()

  },[reloadEffect])


  return (
    <div>
        {
            ( artisan )
            ? <ArtisanManagement artisan={artisan} />
            : <LinkArtisan onUserIsLink={() => setRelaoadEffect( ! reloadEffect )} />
        }
    </div>
  )
}

export default ArtisanSpace
