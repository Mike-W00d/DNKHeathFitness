import React from 'react'
import ReviewCard from '@/components/reviewCard'
import { reviews } from '@/constants/index'

const Reviews = () => {
  return (
    <div className='bg-[#303030]'>
      <h1 className='w-full bg-hyrox text-black text-5xl font-bold text-center py-4 mb-3'> Customer Reveiws </h1>
      <div className='grid max-sm:grid-cols-2 grid-cols-3 gap-4'>
      {reviews.map((review) => (
          <ReviewCard key={review.name} name={review.name} review={review.review} instagram={review.instagram} />
        ))}
      </div> 
    </div>
  )
}

export default Reviews