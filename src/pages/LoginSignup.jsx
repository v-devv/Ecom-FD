import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { API_URL } from '../api_link';
const LoginSignup = () => {

  const [state , setState] = useState("Login");
  const [formData , setFormData] = useState({
    name:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData , [e.target.name]:e.target.value})
  }
  const login = async()=>{
    console.log("Login Function" , formData);
    let responseData;
    await fetch(`${API_URL}/login` , {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Accept :"application/json"
      },
      body:JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=>responseData=data);
    if(responseData.success){
      console.log("Data" , responseData);
      localStorage.setItem('auth-token' , responseData.token)
      window.location.replace("/")

    }else{
      console.log("Error" , responseData);
      alert(responseData.error)
    }

  }
  const signup = async()=>{
    console.log("Sign Function" , formData);
    let responseData;
    await fetch(`${API_URL}/register` , {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Accept :"application/json"
      },
      body:JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=>responseData=data);
    if(responseData.success){
      console.log("Data" , responseData);
      localStorage.setItem('auth-token' , responseData.token)
      window.location.replace("/")

    }else{
      console.log("Error" , responseData);
      alert(responseData.error)
    }
  }
  return (
    <div className='LoginSignup'>
      <div className="LoginSignup-container">
        <h1>{state}</h1>
        <div className="LoginSignup-Fields">
        {state==="Sign Up" ?<input type="text" name='name' value={formData.name} onChange={changeHandler} placeholder="Your Name"/>:<></> }

          <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder="Email Address"/>
          <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder="Password"/>
        </div>
        <button onClick={()=>{state === 'Login'?login():signup()}}> Continue</button>
        {state==="Sign Up"
        ?<p className="LoginSignup-login">
        Already have an account? <span onClick={()=>(setState("Login"))}>Login here</span>
      </p>: <p className="LoginSignup-login">
          Create an account ! <span onClick={()=>(setState("Sign Up"))}>Click here</span>
        </p>}
        
       
        <div className="LoginSignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By signing up, you agree to our Terms of Service Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup