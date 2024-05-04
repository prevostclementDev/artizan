import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import {Button, Card, CardBody, Tab, Tabs} from '@nextui-org/react'
import ProfilForm from "../../components/dashboard/ProfilForm.jsx";
import LinkArtisan from "../../components/dashboard/LinkArtisan.jsx";
import ArtisanSpace from "../../components/dashboard/ArtisanSpace.jsx";

function Dashboard () {
  const navigate = useNavigate()

  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/authentication')
  }

  return (
      <>
          <div className='px-72 my-10'>

              <h1 className='text-3xl my-3 font-semibold'>Dashboard</h1>

              <div className="flex w-full flex-col">
                  <Tabs  className='my-3' aria-label="Disabled Options">
                      <Tab key="users" title="Mon profil" >
                          <Card>
                              <CardBody className='p-5'>
                                  <ProfilForm/>
                              </CardBody>
                          </Card>
                      </Tab>
                      <Tab key="artisans" title="Mon espace artisan">
                          <Card>
                              <CardBody className='p-5'>
                                  <ArtisanSpace />
                              </CardBody>
                          </Card>
                      </Tab>
                  </Tabs>

                  <div className='flex justify-end px-3 py-2'>
                      <Button color='danger' onClick={handleLogout} className='w-fit'>
                          Se déconnecter
                      </Button>
                  </div>

              </div>

          </div>
      </>
  )
}

export default Dashboard
