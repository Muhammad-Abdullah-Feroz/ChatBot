import React, { useEffect, useState } from 'react'

const Sidebar = ({ user }) => {

  const [initials, setInitials] = useState("")

  useEffect(() => {
    console.log(user)
    if (user) {
      const names = user.split(" ")
      const initials = names[0].charAt(0) + names[1].charAt(0)
      setInitials(initials)
    }

  }, [user])


  return (
    <>
      <div className='sidebar w-[30%] h-full bg-blue-300'>
        <div className='flex flex-col  h-full'>
          <div className='flex justify-center items-center h-[25%] mt-20'>
            <div className='flex justify-center bg-amer-100 bg-white items-center h-[90%] aspect-square rounded-full'>
              <div className='rounded-full bg-blue-300 hover:scale-105 hover:bg-blue-500 transition-transform text-white flex items-center justify-center h-[80%] aspect-square text-[500%] font-bold'>{initials}</div>
            </div>
          </div>
          <div className="menu mt-14 overflow-hidden">
            <div className="profile p-2 px-8 hover:bg-blue-500 hover:scale-105 transition-transform text-lg font-black flex items-center border text-white">Chat</div>
            <div className="profile p-2 px-8 hover:bg-blue-500 hover:scale-105 transition-transform text-lg font-black flex items-center border text-white">Profile</div>
            <div className="profile p-2 px-8 hover:bg-blue-500 hover:scale-105 transition-transform text-lg font-black flex items-center border text-white">Log out</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
