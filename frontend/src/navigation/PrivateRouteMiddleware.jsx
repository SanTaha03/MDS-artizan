import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

function PrivateRoute () {
  const { state: { jwt, user } } = useAuth()
  // TODO valider le JWT

  return (
    jwt && user ? <Outlet /> : <Navigate to='/authentication' />
  )
}

export default PrivateRoute
