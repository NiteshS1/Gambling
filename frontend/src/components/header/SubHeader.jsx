import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
<link href=".././tailwind.css" rel="stylesheet"></link>;

function SubHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex justify-between bg-white font-bold px-20 shadow-xl'>
      <div className='flex justify-evenly'>
        <ul className='flex justify-evenly cursor-pointer space-x-4' ref={dropdownRef}>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/dashboard">Dashboard</Link></li>
          {/* <NavItem to="/downline-list">Downline List</NavItem> */}
          <li className='hover:underline border-r border-gray-500 pr-2'><DropdownItem
            label="Downline List"
            isOpen={openDropdown === 'downline'}
            toggle={() => toggleDropdown('downline')}
          >
            <Link to="/user-downline" >User Downline List</Link><br />
            <Link to="/master-downline">Master Downline List</Link>
          </DropdownItem></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/my-account">My Account</Link></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><DropdownItem
            label="My Report"
            isOpen={openDropdown === 'myReport'}
            toggle={() => toggleDropdown('myReport')}
          >
            <Link to="/event">Event Profit/Loss</Link><br />
            <Link to="/downline">Downline Profit/Loss</Link>
          </DropdownItem></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/betlist">BetList</Link></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/market-analysis">Market Analysis</Link></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><DropdownItem
            label="Banking"
            isOpen={openDropdown === 'banking'}
            toggle={() => toggleDropdown('banking')}
          >
            <Link to="/user">User Banking</Link><br />
            <Link to="/master">Master Banking</Link>
          </DropdownItem></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/commission">Commission</Link></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/password-history">Password History</Link></li>
          <li className='hover:underline border-r border-gray-500 pr-2'><Link to="/restore-user">Restore User</Link></li>
        </ul>
      </div>
      <div>
        <button to="/logout">Logout</button>
      </div>
    </div>
  );
}

function DropdownItem({ label, isOpen, toggle, children }) {
  return (
    <li className='relative'>
      <button onClick={toggle} className='hover:underline focus:outline-none'>
        {label}
      </button>
      {isOpen && (
        <ul className='absolute bg-custom-gradient text-white shadow-lg p-2 w-[220px]'>
          {children}
        </ul>
      )}
    </li>
  );
}

export default SubHeader;
