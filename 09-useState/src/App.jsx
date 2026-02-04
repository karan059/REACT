//  import React from 'react'
// import { useState } from 'react'
 
  
//  const App = () => {
//   const [a, setA] = useState(10)
//   const [user, setUser] = useState('Karan')
//   function changeA(){
//     setA(30);
//     setUser('Khan')
//   }
//    return (
//      <div>
//        <h1> The value of  a is {a} <br /> and name of user is {user}</h1>
//        <button onClick={changeA} >CLick</button>
//      </div>
//    )
//  }
 
//  export default App

// ................assynchronus update
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(10);
//   const btnClicked=()=>{
//     console.log(num)
//     setnum(num+5)
//     console.log(num);//10 because the process is asynchronusly and console updates instantly but ui is updated in a while so value is updated on ui but not on console

//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [user, setUser] = useState('karan');
//   const [age, setage] = useState(22)
//   const changeUser = ()=>{
//     setUser('khan')
//     setage(23)
//   }
//   return (
//     <div>
//       <h1>{user}, {age}</h1>
//       <button onClick={changeUser} >click</button>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState({user:'karan', age:20})
//   const btnClicked = ()=>{
//       const newNum = {...num};
      
//       newNum.user = 'khan'
//       newNum.age = 23;
//       setNum(newNum);
//   }
//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClicked} >click</button>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState([10,20,30,40,50])
//   const btnClicked = ()=>{
//       const newNum = [...num];
//       newNum.push(60);
//       console.log(newNum)
//       setNum(newNum);
//   }
//   return (
//     <div>
//       <h1>{num} </h1>
//       <button onClick={btnClicked} >click</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'

const App = () => {
  // const [num, setNum] = useState({User: 'anamika', age:22})
  // const btnClicked = ()=>{
  // setNum(prev =>({...prev, age:17}))
  const [num, setnum] = useState(10);
  const btnClicked=()=>{
    // setnum(num+1)// in this way value is increased by 1 on click not by 3 
    // setnum(num+1)// this is called batch update 
    // setnum(num+1)// and it is done using prev method{functional update} done earlier

// React collects all state updates inside the same event (like a click), and then:

        // Merges them

        // Applies them together

        // Triggers only ONE re-render
    // functional update
      setnum(prev = prev + 1)
      setnum(prev = prev + 1)
      setnum(prev = prev + 1)
      // this wil update the num by three 
  }

  
  return (
    <div>
      <h1> {num} </h1>
      <button onClick={btnClicked} >click</button>
    </div>
  )
}

export default App