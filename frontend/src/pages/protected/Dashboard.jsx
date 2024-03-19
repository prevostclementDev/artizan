import { useNavigate } from 'react-router-dom'
import Button from '../../components/forms/buttons/Button'
import { useAuth } from '../../contexts/authContext'

function Dashboard () {
  const navigate = useNavigate()

  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/authentication')
  }

  return (
    <>
      <h2>DASHBOARD</h2>
      <Button onClick={handleLogout}>
        Se déconnecter
      </Button>
    </>
  )
}

export default Dashboard
