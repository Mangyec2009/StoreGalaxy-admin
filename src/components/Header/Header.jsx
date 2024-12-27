"use client"
import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Folder, House, Search, Tag } from 'lucide-react'
import Link from 'next/link'
import { Dropdown } from '../Dropdown/Dropdown'
import { getToken } from '@/utils/decode'

const Header = ({children}) => {
    let token = getToken();
    console.log(token);
  return <div className=''>
        <header className='w-[100%] py-[18px] bg-[#5d3da9]'>
            <div className='max-w-[1180px] md:w-[90%] mx-auto flex items-center md:flex-col md:gap-[20px] md:items-start justify-between'>
                <Image src={"/logo.png"} width={500} height={0} alt='' className='w-[150px]' />
                <div className='flex items-center gap-[5px]'>
                    <Input type="email" className="w-[370px] sm:w-[230px] bg-white text-white" placeholder="Название товара или артукул" />
                        <Button type="submit" className={`bg-[#b98fe6]`}>
                            <Search className="text-[white]" />
                        </Button>
                        <div className="hidden sm:block">
                        <Dropdown />
                        </div>
                </div>
            </div>
        </header>
        <div className='w-[100%] flex '>
            <div className='w-[17%] sm:hidden text-white h-[88vh] flex bg-[#5d3da9]'>
                <div className='w-[70%] mx-auto'>
                    <Link href="/">
                        <div className='flex items-center gap-4 mt-[30px]'>
                            <House />
                            Dashboard
                        </div>
                    </Link>
                    <Link href="/products">
                        <div className='flex items-center gap-4 mt-[30px]'>
                            <Tag />
                            Products
                        </div>
                    </Link>
                    <Link href="/others">
                        <div className='flex items-center gap-4 mt-[30px]'>
                            <Folder />
                            Other
                        </div>
                    </Link>
                </div>
            </div>
            <div className='w-[83%] m-[10px] sm:w-[90%] sm:mx-auto'>
                {children}
            </div>
        </div>
  </div>
}

export default Header