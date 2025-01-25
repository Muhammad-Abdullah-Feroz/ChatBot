import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import Login from './components/Login'

function App() {
  const [userName, setUserName] = useState("Guest User")
  const [authModal, setAuthModal] = useState(true)

  const getData = (username, authenticated) => {
    setUserName(username)
    setAuthModal(!authenticated)
  }

  return (
    <>{
      authModal ? <Login onAuthentication={getData} /> :
        <div className='App h-screen w-screen flex flex-row'>
          <Sidebar user="Abdullah Feroz" />
          <Chat />
        </div>
    }
    </>
  )
}

export default App
