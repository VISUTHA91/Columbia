import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../constant'

function Services() {
  return (
    <section className='max-container flex justify-center flex-wrap gap-6'>
          {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services