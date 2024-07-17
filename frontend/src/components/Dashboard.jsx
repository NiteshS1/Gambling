import React from 'react';
import PieChart from './PieChart';

const liveSportsData = {
  labels: ['Football', 'Basketball', 'Tennis'],
  datasets: [
    {
      label: 'Live Sports Profit',
      data: [100],
      backgroundColor: [
        'rgba(0, 0, 0, 0)',
        
      ],
      borderColor: [
        'rgba(1, 1, 1, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const backupSportsData = {
  labels: ['Cricket', 'Hockey', 'Rugby'],
  datasets: [
    {
      label: 'Backup Sports Profit',
      data: [200, 150, 80],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

function Dashboard() {
  return (
    <div className='flex justify-evenly mt-9 w-full'>
      <div className='left border border-black rounded-lg w-1/3 h-96 '>
        <div className='header font-bold mb-2 text-white rounded-t-lg p-4 bg-blue-900'>
          Live Sports Profit
        </div>
        <div className='chart h-64'>
          <PieChart data={liveSportsData} options={options} />
        </div>
      </div>
      <div className='right border border-black rounded-lg w-1/3 h-96'>
        <div className='header font-bold mb-2 text-white rounded-t-lg p-4 bg-blue-900'>
          Backup Sports Profit
        </div>
        <div className='chart h-64'>
          <PieChart data={backupSportsData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
