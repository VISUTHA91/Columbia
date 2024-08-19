import React from 'react'
import { shoe8 } from '../assets/images'

function SuperQuality() {
  return (
    <section className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>We Provide You <span className='text-blue-500'>Super Quality </span>Shoes </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <button className='bg-blue-400 rounded-2xl px-3 py-2 mt-8 ml-6'>View Details</button>
      </div>
      <div>
      <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality