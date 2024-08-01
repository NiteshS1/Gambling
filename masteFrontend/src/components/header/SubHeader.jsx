import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
<link href=".././tailwind.css" rel="stylesheet"></link>;

function SubHeader() {

  return (
    <div className='flex justify-between bg-white font-bold px-20 shadow-xl'>
      <div className='flex justify-evenly'>
        <ul className='flex justify-evenly cursor-pointer space-x-4'>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/dashboard">Dashboard</Link></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/agent">Agent Record</Link></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/user">User Data</Link></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/transaction">Transaction History</Link></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/report">Report</Link></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/form">Form</Link></li>
        </ul>
      </div>
      <div>
        <button to="/logout">Logout</button>
      </div>
    </div>
  );
}

export default SubHeader;
