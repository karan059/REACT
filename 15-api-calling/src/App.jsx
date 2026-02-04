 import React from 'react'
 import axios from 'axios'
import { useState } from 'react'
 const App = () => {

  //  function getData(){
  // const response =  fetch('https://jsonplaceholder.typicode.com/todos/1')
  //         .then(response => response.json())
  //         .then(json => console.log(json))
  // }

  // using fetch
    // const getData = async() => {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     const data = await response.json()
    //     console.log(data);
    // }
    // using axios 
    // const getData= async() => {
    //  const  {data} =  await axios.get('https://jsonplaceholder.typicode.com/todos')
    //  console.log(data);
     
    // }

    const [data, setData] = useState([])
    const getData = async () => {
     const response = await axios.get('https://picsum.photos/v2/list')
      setData(response.data)
    }





   return (
     <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
           
           return <h3>Hello {elem.author}{idx}</h3>
        })}
      </div>
     </div>
   )
 }

 export default App



 //pagenation and infinite scrolling 
 