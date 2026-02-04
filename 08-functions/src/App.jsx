// //  import React from 'react'
 
// //  const App = () => {
  
// //   function inputChanging(val){
// //     console.log(val);
// //   }
    
// //    return (
// //      <div>
// //         {/* <h1>Hello guys</h1>
// //         <button onClick={()=>{
// //           console.log('button is clicked');
// //         }}  >Change user</button> */}
// //         <input  onChange = {function(elem){
// //             inputChanging(elem.target.value)          
// //         }}
// //         type="text" 
// //         placeholder='Enter Name' />
// //      </div>
// //    )
// //  }
 
// //  export default App






// import React from 'react'


// const pageScrolling = (elem)=>{
//   if(elem>=0) console.log("seedha scroll");
//   else console.log("ulta scroll");
  

  
// }
// const App = () => {
//   return (
     

//         <div onWheel={(elem)=>{
//           pageScrolling(elem.deltaY)
//         }}>
//           <div className="page1"></div>
//           <div className="page2"></div>
//           <div className="page3"></div>
//         </div>

     
//   )
// }

// export default App



import React from 'react'
function btnClicked(){
  console.log('hello');
}
const App = () => {
  return (
    <div>
       <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App