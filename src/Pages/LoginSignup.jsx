import React from 'react'
import './Css/LoginSignup.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

 const LoginSignup = () => {

  const navigate = useNavigate()

  const [data,setData] = useState({
    name:'',
    email:'',
    password:''
  })


  const registerUser = async (e) =>{
    e.preventDefault()
    const {name,email,password}=data
    try {
      const {data} = await axios.post('/login',{
        name,email,password
      })

      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success("Login succesful , Welcome!")
        navigate('/signup')
      }
      
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <form onSubmit={registerUser} >
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'  value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
          <input type="email" placeholder='Email Address' value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
          <input type="password" placeholder='Password' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account?<Link to='/signup'><span>Login Here</span></Link></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id=""/>
          <p>By continuing,i agree to the ters of use & policy</p>
        </div>
        </form>

      </div>
    </div>
  )
}

export default LoginSignup;  
