import React from 'react'
import { star } from '../assets/icons'

function ProductCard({ imgURL, name, price }) {
  return (
    // <div className='grid'>
    <div className='flex flex-1 flex-col w-full max-sm:w-full p-4'>
        <img src={imgURL}  height={80} width={180} className='' />
        <div className='flex'>
        <img src={star} className='mt-3' alt='rating icon' width={24} height={24} />
        <p className='mt-5 p-1'> 4.5</p>
        </div>
        <h3>{name}</h3>
        <p>{price}</p>

    </div>
  )
}

export default ProductCard