import React from 'react'
// import { world } from "../assets/images";


function Footer() {
  return (
    <section className='flex justify-between text-white'>
      <div className='gird'>
        <h4 className='font-bold'>Resources</h4>
        <div className='mt-3 leading-10'>
        <p>Find a Store</p>
      <p>Become a Member</p>
      <p>Send a Feedback</p>
      </div>
      </div>
      <div className='gird'>
        <h4 className='font-bold'>Help</h4>
        <div className='mt-3 leading-10'>
        <p>Get Help</p>
      <p>delivary</p>
      <p>Returns</p>
      <p>Payment Options</p>
      </div>
      </div>
      <div className='gird'>
        <h4 className='font-bold'>Company</h4>
        <div className='grid  mt-3 leading-10'>
      <a href=''>About Nike</a>
      <a href=''>News</a>
      <a href=''>Careers</a>
      <a href=''>Investors</a>
      </div>
      </div>
      <div><a href=''>
        {/* <img src={world} /> */}
        India
        </a></div>
    </section>
  )
}

export default Footer