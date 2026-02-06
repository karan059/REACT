 import React from 'react'
 import { Link } from 'react-router-dom'
 const Product = () => {
   return (
        <div>
            <div className='flex justify-center gap-10 py-4'>
                <Link  className = 'text-xl font-semibold' to='/product/men'> Men</Link>
                <Link  className = 'text-xl font-semibold' to='/product/women'> women</Link>
                <Link  className = 'text-xl font-semibold' to='/product/kids'> kids</Link>
            </div>
        </div>
   )
 }
 
 export default Product