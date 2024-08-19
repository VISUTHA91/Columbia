import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../constant'

function PopularProducts() {
  return (
    
    <section>
      <div>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>Our <span className='text-blue-500'>Popular </span>Products</h2>
      </div>
      <div className='flex gap-1 max-lg:flex-col'>
      {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

    </section>    
  )
}

export default PopularProducts