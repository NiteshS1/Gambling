import React from 'react'
import { FaUndoAlt } from "react-icons/fa";
<link href=".././tailwind.css" rel="stylesheet"></link>

function MainHeader() {
  return (
    <div className="w-full bg-custom-gradient flex justify-between text-white p-4">
      <div className="text-3xl px-20 content-center">LOGO</div>
      <div className="flex flex-row items-center px-6 pe-32">
        <button className="bg-black text-white text-xs rounded-md mx-2 w-10 mt-1">AGENT</button>
        <div className="text-bold align-center"><ul className="flex"><li className="mx-2">rocky1004</li>
          <li className="mx-2">IRP 135,243.00</li></ul> </div>
        <button className="bg-black w-[25px] h-[25px] rounded-sm"><FaUndoAlt className="w-[22px] h-[22px] p-1 space-"></FaUndoAlt></button>
      </div>
    </div>
  )
}

export default MainHeader