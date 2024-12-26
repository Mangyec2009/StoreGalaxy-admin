"use client"
import React from 'react'
import ReactApexChart from 'react-apexcharts';

const Apexchart = () => {
  const options = {
    chart: {
      id: 'basic-bar',
      type: 'line', // You can change the type of chart here (line, bar, pie, etc.)
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
    title: {
      text: 'Monthly Sales',
      align: 'center',
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];
  return <>
    <div>
      <h2>Sales Revenue</h2>
      <ReactApexChart options={options} series={series} type="line" width={800} height={350} />
    </div>
  </>
}

export default Apexchart