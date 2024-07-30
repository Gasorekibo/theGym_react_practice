import React from 'react'
import Button from './Button'
function Navbar() {
  return (
    <>
      <nav className="bg-white h-20 place-content-center px-36 sticky top-0 z-30 text-primary cursor-pointer">
        <div className="container flex justify-between  ">
          <h1 className='font-extrabold text-xl'>REACT LANDING PAGE</h1>
          <ul className='flex gap-6 '>
            <li className='text-md'>FEATURES</li>
            <li className='text-md'>ABOUT</li>
            <li className='text-md'>SERVICES</li>
            <li className='text-md'>GALLERY</li>
            <li className='text-md'>TESTIMONIALS</li>
            <li className='text-md'>TEAM</li>
            <li className='text-md'>CONTACT</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar