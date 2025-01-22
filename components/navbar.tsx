import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between z-50 w-full gap-5 p-6 sm:px-12 items-center">
      <Link href="/" className='flex flex-row items-center gap-2'>
        <Image 
        src="/logo.jpg" 
        alt="logo" 
        width={60} 
        height={60} 
        className='rounded-md'
        />
        <h1 className='text-4xl font-bold tracking-widest'> 
        DNK Health + Fitness 
      </h1>
      </Link>
    <div className='gap-5 flex flex-row place-content-end'> 
    <Link href='/reviews'>
    <button className="yellow-btn sm:h-auto md:h-[52px]">Customer Testimonials</button>
    </Link>

      <Link href="/booking">
      <button className="yellow-btn sm:h-auto md:h-[52px]">Book A Session</button>
      </Link>
    </div>
    </nav>  
  )
}

export default Navbar