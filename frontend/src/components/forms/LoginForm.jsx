import { useEffect, useState } from 'react'
import Input from './inputs/input'
import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'

function LoginForm () {
  const [formData, setformData] = useState({
    identifier: 'luffy@mail.com',
    password: 'luffytaro'
  })
  const navigate = useNavigate()

  const { state: { user, jwt, error }, login } = useAuth()

  useEffect(() => {
    if (user && jwt) {
      navigate('/dashboard')
    }
  }, [user, jwt])

  const handleChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formData)
  }

  return (
    <>
      <h2>SE CONNECTER</h2>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <Input
          type='email'
          name='identifier'
          label='Email : '
          placeholder='mail@provider.com'
          value={formData.identifier}
          onChange={handleChange}
        />

        <Input
          type='password'
          name='password'
          label='Mot de passe : '
          placeholder=''
          value={formData.password}
          onChange={handleChange}
        />
        {
            error && <p style={{ color: 'red' }}>{error}</p>
        }
        <Button variant='faded' type='submit'>
          Se connecter
        </Button>
      </form>
    </>
  )
}

export default LoginForm
