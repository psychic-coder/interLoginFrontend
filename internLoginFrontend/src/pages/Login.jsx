import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle login logic here
    navigate("/home")
    console.log('Login attempt with:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white px-6 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900 mb-1">Signin to your PopX account</h1>
        
        <p className="text-sm text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block  text-sm font-medium mb-1 text-[#6C25FF]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-sm"
          />
        </div>

        <div>
          <label className="block  text-sm font-medium mb-1 text-[#6C25FF]">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-sm"
          />
        </div>

        <button 
          onClick={handleSubmit}
          className="w-full py-3 bg-[#CBCBCB] hover:bg-[#6C25FF] text-white rounded-md text-base font-medium mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
}