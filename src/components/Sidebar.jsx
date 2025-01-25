import React, { useEffect, useState } from 'react'

const Sidebar = ({ user }) => {

  const [initials, setInitials] = useState("")

  useEffect(() => {
    if (user) {
      const names = user.split(" ")
      const initials = names[0]?.charAt(0) + names[1]?.charAt(0)
      setInitials(initials.toUpperCase()) // Make initials uppercase for consistency
    }
  }, [user])

  return (
    <div className="sidebar w-[280px] h-full bg-blue-300 p-6 space-y-8">
      {/* User Avatar Section */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-24 h-24 bg-blue-400 rounded-full shadow-md hover:bg-blue-500 transition duration-200">
          <div className="text-4xl font-bold text-white">{initials}</div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="menu cursor-pointer space-y-4">
        <div>
          <div className="profile border-b-blue-800  p-3 px-6 rounded-lg text-lg font-semibold text-white hover:bg-blue-500 hover:scale-105 transition-all">
            Chat
          </div>
          <div className='h-[1px] bg-blue-600' ></div>
        </div>
        <div>
          <div className="profile  border-b-blue-800 p-3 px-6 rounded-lg text-lg font-semibold text-white hover:bg-blue-500 hover:scale-105 transition-all">
            Profile
          </div>
          <div className='h-[0.5px] bg-blue-600' ></div>
        </div>
        <div>
          <div className="profile  border-b-blue-800 p-3 px-6 rounded-lg text-lg font-semibold text-white hover:bg-blue-500 hover:scale-105 transition-all">
            Log out
          </div>
          <div className='h-[1px] bg-blue-600' ></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
