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
    <div className='flex flex-col items-start gap-[40px]'>
      <h2>Sales Revenue</h2>
      <ReactApexChart options={options} series={series} type="line" className="w-[800px] h-[350px] md:w-[300px] md:h-[100px]" />
    </div>
  </>
}

export default Apexchart