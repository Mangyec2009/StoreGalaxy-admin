"use client"
import Image from 'next/image'
import React from 'react'
import image1 from '../../../../public/div.MuiBox-root (1).png';
import image2 from '../../../../public/iconly-glass-discount.svg.png';
import image3 from '../../../../public/div.MuiBox-root.png';

export default function Section1() {
  return (
    <div className='flex items-center justify-between mb-[50px]'>
      <div className='bg-[#fbe8e6] flex items-center md:flex-col p-[15px] w-[200px] rounded-[15px]'>
        <Image src={image1} alt=''/>
        <div className='ml-[20px]'>
          <p className='text-[13px]'>Sales</p>
          <h1 className='text-[30px] font-semibold'>$152k</h1>
        </div>
      </div>
      <div className='bg-[#FFFAEB] flex items-center p-[15px] w-[200px] rounded-[15px]'>
        <Image src={image2} alt=''/>
        <div className='ml-[20px]'>
          <p className='text-[13px]'>Cost</p>
          <h1 className='text-[30px] font-semibold'>$99.7k</h1>
        </div>
      </div>
      <div className='bg-[#F0FDF9] flex items-center p-[15px] w-[200px] rounded-[15px]'>
        <Image src={image3} alt=''/>
        <div className='ml-[20px]'>
          <p className='text-[13px]'>Profit</p>
          <h1 className='text-[30px] font-semibold'>$32.1k</h1>
        </div>
      </div>
    </div>
  )
}
