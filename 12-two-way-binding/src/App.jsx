 import React from 'react'
import { useState } from 'react'
 
 const App = () => {

    const [title, setTitle] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log('form submitted by ', title)
    // alert('form submitted by ', title) // this won't work because alert only accepts one argument
    alert(`form submitted by ${title}`)// this ia one way using backticks
    alert("form submitted by " + title) // this is another way involving string concatenation
  }
   return (
     <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
            type="text" 
            placeholder='Enter your Name'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            />
        <button>Submit</button>
      </form>
     </div>
   )
 }
 
 export default App