import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterForm from '../components/forms/RegisterForm'
import LoginForm from '../components/forms/LoginForm'
import { useAuth } from '../contexts/authContext'
import { Card, CardBody, Tab, Tabs} from "@nextui-org/react";

function Auth () {
  const navigate = useNavigate()

  const { state: { jwt, user } } = useAuth()


  useEffect(() => {
    if (jwt && user) {
      navigate('/dashboard')
    }
  }, [user,jwt])

  return (
      <>

        <div className='px-72 my-10'>

          <div className="flex w-full flex-col">
            <Tabs className='my-3' aria-label="Disabled Options">
              <Tab key="login" title="Se connecter">
                <Card>
                  <CardBody className='p-5'>
                    <LoginForm/>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="register" title="S'enregistrer">
                <Card>
                  <CardBody className='p-5'>
                    <RegisterForm/>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>

        </div>

      </>
  )
}

export default Auth
