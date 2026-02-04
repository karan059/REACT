import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  // const [num, setnum] = useState(0)
  // const [num2, setnum2] = useState(100)
  // useEffect(function(){
  //   console.log('useEffect is runing...');
    
  //  },[num]) //passing dependency array/list

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function aChanging(){
        console.log('A is changing');
        
  }
  function bChanging(){
        console.log('B is changing');
        
  }

  useEffect(function(){
    aChanging()
    console.log('useEffect is running...')
  },[a])
  return (
    <div>
      {/* ist */}
      {/* <h1>   num is {num}</h1>
      <h1>   num2 is {num2}</h1>
      <button 
      onMouseEnter={()=>{
        setnum(num + 1)
      }} 
      onMouseLeave={()=>{
        setnum2(num2 + 10)
      }}
      >Hover</button> */}

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button
        onClick={()=>{
          setA(a+ 1)
        }}
        >Change A</button>
      <button
        onClick={()=>{
          setB(b+ 1)
        }}>Change B</button>
    </div>
  )
}

export default App