import './App.css'
import Header from './components/header/Header.jsx'
import Router from './navigation/Router.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './contexts/authContext.jsx'
import { NextUIProvider } from '@nextui-org/react'
function App () {
  return (
    <>
      <NextUIProvider>
        <AuthProvider>
          <Header />
          <Router />
          <ToastContainer />
        </AuthProvider>
      </NextUIProvider>
    </>

  )
}

export default App
