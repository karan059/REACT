 import React, { useState } from "react";
  
const App = ()=>{
  const [formData, setFormData] = useState({
    name : "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate =()=>{
    const err ={};

    if(!formData.name) err.name = "Name required" ;
    if(!formData.email.includes("@")) err.email = "Invalid email"
    if(formData.password !==formData.confirmPassword)
        err.confirmPassword = "password does not match";

    setErrors(err);
    return Object.keys(err).length ===0;


  };

  const handleChange=(e)=>{
      const{ name, value } = e.target;
      setFormData(prev=>({
        ...prev,
        [name] : value
      }));
  };


  const handleSubmit =(e)=> {
    e.preventDefault();

    if(validate()){
      console.log(formData);
      alert("Form submitted successfully!")
    }
  };

  

  return (
    <div>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }} >
        <h2>Registration</h2>
          <input 
            type="text"
            placeholder="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
           />

         <input type="email"
                placeholder="Email"
                name="email"
                value={formData.email} 
                onChange={handleChange}
                />
          
          <input 
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                />
          <input 
                type="password"
                placeholder="confirmPassword"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                />
                <br />
          <input type="radio"
                name="gender"
                value="male"
                checked = {formData.gender === "male"}
                onChange={handleChange}
                />Male
          <input 
                type="radio"
                name="gender"
                value="female"
                checked = {formData.gender === "female"}
                onChange={handleChange}
                 />Female
                 <br />
          
          <input type="checkbox"
                  name="terms"
                  checked = {formData.terms}
                  onChange={(e)=>
                    setFormData(prev =>({
                      ...prev,
                      terms:e.target.checked
                    }))
                  }
                  
                  />Accept *term and *conditions
                  <br />
          

          <select 
                name="country"
                value={formData.country}
                onChange={handleChange}
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                </select>
         <br />

        <button>Submit</button> 

      </form>

    </div>
  );

}

export default App