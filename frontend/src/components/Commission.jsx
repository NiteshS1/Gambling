import React, { useState } from 'react'

function Commission() {
  const data = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'James Brown', age: 40, city: 'Chicago' },
    { id: 4, name: 'Emily Davis', age: 35, city: 'San Francisco' },
    { id: 5, name: 'Michael Johnson', age: 28, city: 'Seattle' },
  ];

  // State for search input and entries per page
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering data based on search term
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex justify-center bg-gray-300 mt-3 mx-5 rounded-sm border p-4 border-black ">
        <div className="w-full content-center">
          <input type="date" name="" id="" className="hover:cursor-pointer mx-6 mr-20 p-1 w-[14%]" />
          TO
          <input type="date" name="" id="" className="hover:cursor-pointer mx-6 mr-20 ml-20 p-1 w-[14%]" />
          <text className="bg-blue-950 rounded-md text-white p-1 font-bold cursor-pointer pl-2 pr-2">
            Get Commission
          </text>
        </div>
      </div>

      <div>

        <div className="container mx-auto px-4 py-4 ">
          <div className="border border-gray-300 rounded-lg">
          <h1 className="bg-blue-900 text-white mb-5 p-2 rounded-t-md">Agent Commission</h1>

          <div className="p-4">
            <div className="border border-gray-300 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4  ">


            {/* Show entries dropdown */}
            <div className="relative">
              <select
                className="border border-gray-300 rounded-md px-3 py-2"
                value={entriesPerPage}
                onChange={e => setEntriesPerPage(Number(e.target.value))}
              >
                <option value={5}>Show 5 entries</option>
                <option value={10}>Show 10 entries</option>
                <option value={15}>Show 15 entries</option>
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
                <th className="border border-gray-300 px-4 py-2">Agent Name</th>
                <th className="border border-gray-300 px-4 py-2">Turnover</th>
                <th className="border border-gray-300 px-4 py-2">Commission</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map(item => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.age}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.city}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-700">
              Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredData.length)} of {filteredData.length} entries
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
              <button
                className=" hover:bg-blue-600 px-4 py-2 rounded-r"
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastEntry >= filteredData.length}
              >
                Next
              </button>
              <button
                className=" hover:bg-blue-600 px-4 py-2 rounded-r"
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastEntry >= filteredData.length}
              >
                Last
              </button>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>

      </div>
    </>
  );
}

export default Commission