import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Profile Card */}
      <div className="h-[90%] w-[95%] md:w-[75%] lg:w-[50%] rounded-2xl drop-shadow-2xl shadow-black/10 bg-white p-8 relative">
        {/* Welcome Message */}
        <h1 className="text-center font-bold text-4xl mb-6 text-blue-600 underline decoration-slice">
          Welcome, {user.username}!
        </h1>

        {/* Profile Picture */}
        <div className="flex justify-center mb-10">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white flex items-center justify-center text-5xl font-bold shadow-lg">
            {user.username
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </div>
        </div>

        {/* User Info */}
<div className="space-y-4 text-lg">
  <h2 className="font-bold text-2xl text-gray-700 border-b pb-2 border-gray-300">
    User Info
  </h2>
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
    <p className="text-gray-600 font-semibold">
      <span className="text-blue-600 font-bold">Name:</span> {user.username}
    </p>
    <p className="text-gray-600 font-semibold mt-2">
      <span className="text-blue-600 font-bold">Email:</span> {user.email}
    </p>
    <p className="text-gray-600 font-semibold mt-2">
      <span className="text-blue-600 font-bold">Password:</span> ********
    </p>
  </div>
</div>


        {/* Settings Options */}
        <div className="mt-2 space-y-4">
          <h2 className="font-bold text-2xl text-gray-700 border-b pb-2 border-gray-300">
            Settings
          </h2>
          <div className="space-y-2">
            <button className="w-full cursor-pointer text-left bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-all duration-200 shadow-md">
              Edit Profile
            </button>
            <button className="w-full cursor-pointer text-left bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-all duration-200 shadow-md">
              Change Password
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <a href="/support" className="text-blue-500 hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
