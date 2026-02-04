import React from 'react'
import { ArrowUpRight } from 'lucide-react'
const LeftContent = () => {
  return (
    <div className='h-full w-1/4 ml-5 flex flex-col justify-between'>
        <div className="p-4   ">
            <h3 className='text-5xl font-bold'> Prospective <br /><span className='text-gray-700'>Customer</span> <br /> Segmentation</h3>

            <p className='text-xl text-gray-800 pt-2.5 font-medium mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima adipisci asperiores ipsam quod iure dicta blanditiis laudantium aspernatur illum!</p>
        </div>
        <div  >
             <ArrowUpRight size={80} />
        </div>
    </div>
  )
}

export default LeftContent