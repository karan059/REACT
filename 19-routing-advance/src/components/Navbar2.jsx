import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-gray-800'>
        <button 
        onClick={()=>{
            navigate('/')
        }}
        className='bg-emerald-600 font-medium px-5 py-1 m-3  rounded-2xl cursor-pointer active:scale-95'>Return to HomePage</button>

        <button 
        onClick={()=>{
            navigate(-1)
        }}
        className='bg-emerald-600 font-medium px-5 py-1 m-3  rounded-2xl cursor-pointer active:scale-95'>Back</button>
        <button 
        onClick={()=>{
            navigate(+1)
        }}
        className='bg-emerald-600 font-medium px-5 py-1 m-3  rounded-2xl cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2