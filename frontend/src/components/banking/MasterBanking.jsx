import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";


function MasterBanking() {
  const data = [
    // { uid: 'tapas204', balance: 48.25, available: 48.25, exposure: '(0)', creference: 0, reference: 48.25, deposit: 0, remark: 'Remark' },
    // { uid: 'surojit304', balance: 10.84, available: 10.84, exposure: '(0)', creference: 0, reference: 10.84, deposit: 0, remark: 'Remark' },

  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  // const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntdata

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (

    <div className="p-4">
      <div className="border border-black p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4  ">

          {/* Show entries dropdown */}
          <div className="relative">
            <select
              className="border border-gray-300 rounded-md px-3 py-2"
              value={entriesPerPage}
              onChange={e => setEntriesPerPage(Number(e.target.value))}
            >
              <option value={10}>Show 10 entries</option>
              <option value={25}>Show 25 entries</option>
              <option value={50}>Show 50 entries</option>
              <option value={100}>Show 100 entries</option>
            </select>
          </div>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search by name..."
            className="border border-gray-300 rounded-md px-3 py-2 w-64"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>


        {/* Table */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">UID</th>
              <th className="border border-gray-300 px-4 py-2">Balance</th>
              <th className="border border-gray-300 px-4 py-2">Available D / W</th>
              <th className="border border-gray-300 px-4 py-2">Exposure</th>
              <th className="border border-gray-300 px-4 py-2">Credit Reference</th>
              <th className="border border-gray-300 px-4 py-2">Reference P / L</th>
              <th className="border border-gray-300 px-4 py-2">Deposit/Withdraw</th>
              <th className="border border-gray-300 px-4 py-2">Remark</th>
            </tr>
          </thead>
          <tbody>
            {data.map(data => (
              <tr key={data.id}>
                <td className="border border-gray-300 px-4 py-2">{data.uid}</td>
                <td className="border border-gray-300 px-4 py-2">{data.balance}</td>
                <td className="border border-gray-300 px-4 py-2">{data.available}</td>
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">{data.exposure}</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-700 flex items-center gap-2">{data.creference}<FaRegEdit /></td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">{data.reference}</td>
                <td className="border border-gray-300 px-4 py-2 space-x-2">
                  <button className="bg-gray-400 rounded-md text-white border border-black px-1 w-[25px]">D</button>
                  <button className="bg-gray-400 rounded-md text-white border border-black px-1 w-[25px]">W</button>
                  <input type="text" className="p-0.25 px-2 border-2 border-gray-200 focus:outline-none rounded-md placeholder:text-gray-600" name="" id="" placeholder="0" />
                  <button className="bg-gray-500 text-white px-2 rounded-md font-bold">Full</button>
                </td>
                <td className="border border-gray-300 px-4 py-2">{data.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-700">
            Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, data.length)} of {data.length} entries
          </div>
          <div className="flex">
            <button
              className=" hover:bg-blue-600 px-4 py-2 rounded-l"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              First
            </button>
            <button
              className=" hover:bg-blue-600 px-4 py-2 rounded-l"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button className="hover:bg-blue-600 px-4 py-2 rounded-r">1</button>
            <button className="hover:bg-blue-600 px-4 py-2 rounded-r">2</button>
            <button className="hover:bg-blue-600 px-4 py-2 rounded-r">3</button>
            <button
              className=" hover:bg-blue-600 px-4 py-2 rounded-r"
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastEntry >= data.length}
            >
              Next
            </button>
            <button
              className=" hover:bg-blue-600 px-4 py-2 rounded-r"
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastEntry >= data.length}
            >
              Last
            </button>
          </div>
        </div>
        <div className="pt-2 space-x-5">
          <button className="bg-red-500 text-white p-1 w-1/4 rounded-md">Clear All</button>
          <input type="password" id="" placeholder="Password..." className="p-1 px-3 rounded-md w-1/4 focus:outline-none border border-gray-100" />
          <button className="bg-blue-900 text-white p-1 w-1/4 rounded-md">Submit Payment</button>
        </div>
      </div>
    </div>

  )
}

export default MasterBanking