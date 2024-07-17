import React, { useState } from 'react'

function MasterDownline() {
  const data = [
       
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
      <div className="Masterdownline flex  h-screen w-full flex-col bg-slate-200">
        <div className="table1 text-black flex-col flex items-center w-full mt-10">
          <table className=" border-collapse border-slate-500 border-b table-border text-left w-11/12 bg-white">
            <thead className="pb-3">
              <tr>
                <th>Total Balance</th>
                <th>Total Explosure</th>
                <th>Available Balance</th>
                <th>Balance</th>
                <th>Total Avail.bal.</th>
                <th>Upline p/l</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IPR 13,757</td>
                <td>
                  IPR <span className="text-red-500">(0)</span>
                </td>
                <td>IPR 13,757</td>
                <td>IPR 1,35,243</td>
                <td>IPR 1,49,000</td>
                <td>IPR -1,000</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
            
        <div className="container mx-auto px-4 py-4 ">
            <div className="border border-gray-300 rounded-lg">

                <div className="p-4">
                    <div>
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
                                <th className="border border-gray-300 px-4 py-2">Username</th>
                                <th className="border border-gray-300 px-4 py-2">Credit Ref.</th>
                                <th className="border border-gray-300 px-4 py-2">Balance</th>
                                <th className="border border-gray-300 px-4 py-2">Exposuere</th>
                                <th className="border border-gray-300 px-4 py-2">Exposuere Limit</th>
                                <th className="border border-gray-300 px-4 py-2">Avail.Bal.</th>
                                <th className="border border-gray-300 px-4 py-2">Reg.P/L</th>
                                <th className="border border-gray-300 px-4 py-2">Partnership</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
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
    </div>
    </>
      );
}

export default MasterDownline