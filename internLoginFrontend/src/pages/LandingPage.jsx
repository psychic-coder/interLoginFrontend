import React from 'react'
import {  useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate=useNavigate();
    const handleLoginPage=()=>{
    navigate("/login")
    }
    const handleSigninPage=()=>{
    navigate("/signin")
    }
  return (
    <div className="flex flex-col justify-between min-h-screen bg-white px-4 py-8">
    <div className="mt-auto mb-8">
      <h1 className="text-4xl  text-gray-900 mb-2 font-medium">Welcome to PopX</h1>
      <p className="text-xl text-gray-500 mb-8">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>
      
      
      <div className="space-y-3">
        <button className="w-full py-4 bg-[#6c25ff] text-white rounded-lg text-xl font-medium cursor-pointer" onClick={handleSigninPage}>
          Create Account
        </button>
        
        <button className="w-full py-4 bg-purple-200 text-purple-900 rounded-lg text-xl font-medium cursor-pointer" onClick={handleLoginPage}>
          Already Registered? Login
        </button>
      </div>
    </div>
  </div>
  )
}

export default LandingPage