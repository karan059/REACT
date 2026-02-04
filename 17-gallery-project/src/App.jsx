import React, { useEffect, useState } from 'react'
import Card from './Component/Card'
import axios from 'axios'
const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async() => {
    const Response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(Response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx){
      return  <div key={idx}>
       <Card  elem = {elem}/>
      </div>
    })
  }
 
  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white  '>
         
        <div className='flex flex-wrap gap-4 h-[82%]'>
          {printUserData}
        </div>


        <div className='flex justify-center items-center p-4'>
            <button 
            style= {{ opacity: index == 1 ? 0.5 : 1}}
            className='bg-amber-400 text-black text-sm active:scale-95 cursor-pointer px-4 py-2 rounded-2xl m-2 font-semibold '
            onClick={()=>{
              if(index>1){
                setIndex(index-1)
                setUserData([])
              }
            }}
            >Prev</button>
            <h4>Page {index}</h4>
            <button className='bg-amber-400 text-black text-sm active:scale-95 cursor-pointer px-4 py-2 rounded-2xl m-2 font-semibold'
            onClick={()=>{
              setIndex(index + 1)
              setUserData([])
            }}>Next</button>
        </div>
    </div>
      )
} 





export default App
 