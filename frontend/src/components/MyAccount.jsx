import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function MyAccount() {
  return (
    <div>
      <div className="flex space-x-4 py-4 justify-center bg-gray-100">
        <Link to="/my-account/myProfile">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">MyProfile</button>
        </Link>
        <Link to="/my-account/accountStatement">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">AccountStatement</button>
        </Link>
        <Link to="/my-account/activityLog">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">ActivityLog</button>
        </Link>
      </div>
      
      <Outlet />
    </div>
  )
}

export default MyAccount
