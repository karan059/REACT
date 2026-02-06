import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = () => {
  return (
    <>
    <div className='flex px-10 h-20 bg-gray-800 justify-between items-center ' >
      <h2 className='text-2xl font-extrabold font-serif text-cyan-400 mask-radial-from-neutral-50'>Devnest</h2>
      <div className="flex gap-10  text-xl font-bold">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/product">Product</a>
        <a href="/contact">Contact</a>

      </div>
    </div>
       <Navbar2/>
       </>
  )
}

export default Navbar