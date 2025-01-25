import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'

function App() {
  const [userName, setUserName] = useState("Guest User")
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='App h-screen w-screen flex flex-row'>
        <Sidebar user = "Abdullah Feroz"/>
        <Chat/>
      </div>
    </>
  )
}

export default App
