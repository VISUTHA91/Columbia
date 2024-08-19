import React from 'react'
import { hamburger } from "../assets/icons";
import { favicon } from "../assets/images";
import { navLinks } from '../constant';

function Nav() {
  return (
    <>
     <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={favicon}
            alt='logo'
            width={130}
            height={100}
            className='m-0 w-[130px] h-[100px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-blue-600  hover:text-red-600'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'className='text-lg text-blue-600  hover:text-red-600'>Sign in</a>
          {/* <span>/</span>
          <a href='/'>Explore now</a> */}
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
    </>
  )
}

export default Nav