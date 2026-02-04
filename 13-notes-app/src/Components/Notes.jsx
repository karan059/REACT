import React from 'react'
import RecentNotes from './RecentNotes';
import  Form  from '../Components/Form.jsx';
const Notes = () => {
  return (
     <div className='bg-black min-h-screen lg:flex lg:overflow-hidden  text-white'>
       
        <Form/>
        <RecentNotes/>
      
    </div>
  )
}

export default Notes