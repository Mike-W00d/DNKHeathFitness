import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import MobileNav from './mobile-nav'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between z-50 w-full gap-5 p-6 sm:px-12 items-center">
      {/* Logo */}
      <Link href="/" className='flex flex-row items-center gap-2'>
        <Image 
          src="/logo.jpg" 
          alt="logo" 
          width={60} 
          height={60} 
          className='rounded-md'
        />
        {/* Site Title */}
        <h1 className='text-4xl font-bold tracking-widest'> 
          DNK Health + Fitness 
        </h1>
      </Link>
      {/* Navigation Links */}
      <div className='gap-5 flex flex-row place-content-end max-sm:hidden'> 
        <Link href='/reviews'>
          <button className="yellow-btn min-w-20 sm:h-auto md:h-[52px]">Customer Testimonials</button>
        </Link>
        {/* add Link in here once got */}
          <button className="yellow-btn min-w-20 sm:h-auto md:h-[52px]">Zenfit</button>
        <Link href="/booking">
          <button className="yellow-btn min-w-20 sm:h-auto md:h-[52px]">Book A Session</button>
        </Link>
      </div>
      <div className='sm:hidden'> 
        {/* Mobile Nav imported from seperate */}
        <MobileNav />
      </div>
    </nav>  
  )
}

export default Navbar