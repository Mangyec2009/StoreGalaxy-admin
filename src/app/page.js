"use client"
import Section1 from '@/components/Dashboard/section1/Section1'
import { Table } from '@/components/ui/table';
// import TableDemo from '@/components/Dashboard/Table/Table'
// import { Table } from '@/components/ui/table'
import dynamic from 'next/dynamic'
import React from 'react'
const Apexchart = dynamic(() => import('@/components/Dashboard/Apexchart/Apexchart'), { ssr: false });

export default function Dashboard() {
  return (
    <div className='p-[40px]'>
      <h1 className='text-[25px] font-semibold mb-[30px]'>Dashboard</h1>
      <div className='flex '>
      <div className='mr-[70px]'>
      <Section1/>
      <Apexchart/>
      </div>
      <Table className="ml-[50px]"/>
      </div>
    </div>
  )
}
