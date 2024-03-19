import Button from '../forms/buttons/Button'
import './Header.css'

function Header () {
  return (
    <header className='main'>
      <nav>
        <a href='/'> Home </a>
        <a href='/artisans'>Artisans</a>
        <a href='/about'>About</a>
        <a href='/services'>Services</a>
        <a href='/contact'>Contact</a>
        <a href='/authentication'><Button>Connexion</Button> </a>

      </nav>
    </header>

  )
}

export default Header
