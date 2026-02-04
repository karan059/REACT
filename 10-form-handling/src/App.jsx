import React from 'react'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault() //preventing the default behaviour of form
    console.log('form submitted');
    
  }
  return (
    <div>
      {/* the default behavior of form is that on submitting the page relodes but we have to prevent that*/}
      <form onSubmit={(e)=>{
        submitHandler(e)
      }
        
      }>
        <input type="text"  placeholder='Enter your name'/>
         
        <button> submit</button>
      </form>
    </div>
  )
}

export default App