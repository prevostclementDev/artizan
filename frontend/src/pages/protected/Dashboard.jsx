import { useNavigate } from 'react-router-dom'
import Button from '../../components/forms/buttons/Button'

function Dashboard () {
  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem('AUTH')
    navigate('/authentication')
  }

  return (
    <>
      <h2>DASHBOARD</h2>
      <Button onClick={logout}>
        Se déconnecter
      </Button>
    </>
  )
}

export default Dashboard
