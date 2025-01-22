import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Image from 'next/image'
import Link from 'next/link'

const MobileNav = () => {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger>
    <Image src='/hamburger.webp' alt='dropdown' width={40} height={40} className='bg-white rounded-lg'/> 
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel className='text-lg text-center'>Menu</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Link href='/reviews'>
      <div className='flex flex-row items-center gap-2'>  
      <Image src='/reviewIcon.jpg' alt='review' width={40} height={40} className='rounded-lg'/>
        Customer Testimonials
      </div>
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href='/booking'>
      <div className='flex flex-row items-center gap-2'>  
      <Image src='/bookingIcon.jpg' alt='booking' width={40} height={40} className='rounded-lg'/>
        Book A Session
      </div>
      </Link>
      </DropdownMenuItem>
    <DropdownMenuItem>
    <div className='flex flex-row items-center gap-2'>  
      <Image src='/dropdown.png' alt='Zenfit' width={40} height={40} className='rounded-lg'/>
        Zenfit
      </div>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default MobileNav
