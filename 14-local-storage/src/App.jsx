import React from 'react'

const App = () => {
   
  // user is storein local storage
    // const user = {
    //   username: 'karan',
    //   age : 22, 
    //   city: 'Srinagar',
      
    // }
    // localStorage.setItem('user', JSON.stringify(user))// because localstorege.setitem() accepts key value in string format only;
  
  //retrieving the user
     const user = JSON.parse(localStorage.getItem('user'));

     console.log(user);
     

  return (
    <div>
      App
    </div>
  )
}

export default App