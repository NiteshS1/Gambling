import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function MyProfile() {
  return (
    <>
      <div className=" p-4">
        <header className="font-bold text-white bg-blue-900 rounded-t-md mt-0 pt-0 p-2">
          Account Details
        </header>
        <div className="flex items-center p-2 border border-b-2">
          <div className="p-2 font-semibold flex justify-normal">Name</div>
          <div className="mx-72">rocky1004</div>
        </div>
        <div className="flex items-center p-2 border border-b-2">
          <div className="p-2 font-semibold flex justify-normal">Commission</div>
          <div className="mx-72">0</div>
        </div>
        <div className="flex items-center p-2 border border-b-2">
          <div className="p-2 font-semibold flex justify-normal">Rolling Commission</div>
          <div className="text-blue-800 flex space-x-1 mx-52 cursor-pointer"><FaRegEdit></FaRegEdit><FaEye></FaEye></div>
        </div>
        <div className="flex items-center p-2 border border-b-2">
          <div className="p-2 font-semibold flex justify-normal">Agent Rolling Commission</div>
          <div className="text-blue-800 flex space-x-1 mx-44 cursor-pointer"><FaEye></FaEye></div>
        </div>
        <div className="flex items-center p-2 border border-b-2">
          <div className="p-2 font-semibold flex justify-normal">Currency</div>
          <div className="flex space-x-1 mx-72">IRP</div>
        </div>
        <div className="flex items-center p-2 border border-b-2">
          <div className="p-2 font-semibold flex justify-normal">Partnership</div>
          <div className="flex space-x-1 mx-64">100</div>
        </div>
        <div className="flex items-center p-2 border border-b-2">
          <div className="p-2 font-semibold flex justify-normal">Mobile Number</div>
          <div className="flex space-x-1 mx-52">1234567890</div>
        </div>
        <div className="flex items-center p-2 border border-b-2">
          <div className="p-2 font-semibold flex justify-normal">Password</div>
          <div className="flex space-x-1 mx-64">******** <FaRegEdit className='text-blue-800 cursor-pointer'></FaRegEdit></div>
        </div>


      </div>
    </>
  )
}

export default MyProfile