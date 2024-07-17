import React, { useState } from 'react'

function ActivityLog() {
  const data = [
    { id: 1, LoginDate: '14-7-2024 10:58 PM', Status: 'Login Successful', Address: '206.84.231.35', ISP: 'AGIS', City: 'Nashik/Maharashtra/India' },
  ];

  // State for search input and entries per page
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering data based on search term
  const filteredData = data.filter(item =>
    item.Status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div>

        <div className="container mx-auto px-4 py-4 ">
          <div className="border border-gray-300 rounded-lg">
          <h1 className="bg-blue-900 text-white p-2 rounded-t-md">Activity Log</h1>

          <div className="p-4">
          <div className="flex justify-between items-center mb-4  ">
          </div>

          {/* Table */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Login Date & Time</th>
                <th className="border border-gray-300 px-4 py-2">Login Status</th>
                <th className="border border-gray-300 px-4 py-2">IP Address</th>
                <th className="border border-gray-300 px-4 py-2">ISP</th>
                <th className="border border-gray-300 px-4 py-2">City/State/Country</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map(item => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2">{item.LoginDate}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.Status}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.Address}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.ISP}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.City}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
        </div>

      </div>
    </>
  );
}

export default ActivityLog