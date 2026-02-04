import React, { useState } from 'react'
const Form = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    const submitHandler = (e) =>{
    e.preventDefault();
    
    const copyTask = [...task];
    copyTask.push({title, details})

    setTask(copyTask);

    setTitle('');
    setDetails('');
  }


  return (
    <>

    <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex flex-col  lg:w-1/2 p-10  items-start  gap-4' >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        {/* pehla input or heading  */}
        <input 
        type="text" 
        placeholder='Enter Notes Heading'  
        className='border-2 w-full  rounded px-4 py-3 text-xl mt-5 m-2'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
          
        }}
        />

        {/* detailed input */}
        <textarea 
        type="text" 
        placeholder='Write Details'  
        className='border-2 rounded px-4 py-3 m-2 w-full outline-none h-50 '
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
           
        }}
        />
        <button 
        className='bg-white text-black rounded p-2 m-2 text-2xl font-bold  active:scale-95 active:bg-blue-300'
        >
          Add Notes
        </button>
    </form>
    </>
  )
}

export default Form











