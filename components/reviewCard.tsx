import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

interface ReviewCardProps {
  name: string;
  review: string;
  instagram: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, instagram }) => {
  return (
    <div className='flex flex-col bg-black rounded-lg text-center'>
      <h1 className='text-hyrox font-bold text-2xl text-center'>{name}</h1>
      <p className='text-white text-lg text-center px-2 mb-1'>{review}</p>
      <div className='flex items-center space-x-2 cursor-pointer justify-center'>
        <Link href={`https://www.instagram.com/${instagram}`}>
          <Image src='/insta.jpg' alt='Instagram' width={50} height={50} />
        </Link>
        <p className='text-white font-bold'> {instagram} </p>
      </div>
    </div>
  )
}

export default ReviewCard