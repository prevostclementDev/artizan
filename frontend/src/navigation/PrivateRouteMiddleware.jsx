import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute () {
  const auth = window.localStorage.getItem('AUTH')
  const authObject = JSON.parse(auth)
  const token = authObject?.jwt
  // TODO valider le JWT

  return (
    token ? <Outlet /> : <Navigate to='/authentication' />
  )
}

export default PrivateRoute
