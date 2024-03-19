import { useEffect, useState } from 'react'
import RegisterForm from '../components/forms/RegisterForm'
import LoginForm from '../components/forms/LoginForm'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

function Auth () {
  const [isRegister, setisRegister] = useState(false)
  const navigate = useNavigate()

  const { state: { jwt, user } } = useAuth()

  useEffect(() => {
    if (jwt && user) {
      navigate('/dashboard')
    }
  }, [])

  return (
    <>
      {
            isRegister
              ? <RegisterForm />
              : <LoginForm />
        }
      <a onClick={() => setisRegister(!isRegister)}> {isRegister ? "J'ai déjà un compte" : "Je n'ai pas de compte"}
      </a>
    </>
  )
}

export default Auth
