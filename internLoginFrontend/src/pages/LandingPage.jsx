import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
    
    const handleLoginPage = () => {
        navigate("/login")
    }
    
    const handleSigninPage = () => {
        navigate("/signup")
    }
    
    return (
      <div className="flex flex-col min-h-screen bg-white px-6 py-12">
      
            <div className="flex-grow flex flex-col justify-end pb-10">
            <h1 className="text-3xl font-semibold text-gray-900 ">Welcome to PopX</h1>
                <p className="text-base text-gray-700">
                    Lorem ipsum dolor sit amet,
                </p>
                <p className="text-base text-gray-700">
                    consectetur adipiscing elit,
                </p>
            </div>
            
       
            <div className="mt-auto space-y-2">
                <button 
                    className="w-full py-3 bg-[#6C25FF] text-white rounded-md text-base font-medium"
                    onClick={handleSigninPage}
                >
                    Create Account
                </button>
                
                <button 
                    className="w-full py-3 bg-[#CEBAFB] text-[#1D1D1D] rounded-md text-base font-medium"
                    onClick={handleLoginPage}
                >
                    Already Registered? Login
                </button>
            </div>
        </div>
    )
}

export default LandingPage