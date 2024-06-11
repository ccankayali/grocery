import { LayoutGrid, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import CattegoryButton from './CattegoryButton'

const Navbar = () => {
  return (
    <div className='p-5 shadow-sm flex justify-between'>
        <div className='flex items-center gap-8'>
            <Link href='/'>
                <Image src="/logo.png" alt="logo" width={130} height={90} className='cursor-pointer' />
            </Link>

            <CattegoryButton />

            <div className='md:flex gap-2 items-center border rounded-full p-2 px-5 bg-slate-50'>
                <Search className='h-5 w-5'/> Search
                <Input placeholder='Search' />
            </div>
        </div>

        <div className='flex gap-5 items-center'>
            <h2 className='flex gap-2 items-center text-lg'>
                <ShoppingCart className='h-8 w-8' />
                <span className='bg-green-600 text-white rounded-full'>2</span>
            </h2>
            <Button className='bg-green-600'>Login</Button>
        </div>
    </div>
  )
}

export default Navbar