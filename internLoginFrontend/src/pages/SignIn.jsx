import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleSignin=()=>{
    navigate("/home");
  }

  return (
    <div className="flex flex-col min-h-screen bg-white px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900 mb-1">Create your</h1>
        <h1 className="text-2xl font-medium text-gray-900">PopX account</h1>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-[#6c25ff] text-sm font-medium mb-1">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-900 text-sm"
            placeholder="Enter full name"
          />
        </div>

        <div>
          <label className="block text-[#6c25ff] text-sm font-medium mb-1">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-900 text-sm"
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label className="block text-[#6c25ff] text-sm font-medium mb-1">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-900 text-sm"
            placeholder="Enter email address"
          />
        </div>

        <div>
          <label className="block text-[#6c25ff] text-sm font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-900 text-sm"
            placeholder="Enter password"
          />
        </div>

        <div>
          <label className="block text-[#6c25ff] text-sm font-medium mb-1">
            Company name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-900 text-sm"
            placeholder="Enter company name"
          />
        </div>

        <div className="pt-2">
          <label className="block text-gray-900 text-sm font-medium mb-3">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="isAgency"
                checked={formData.isAgency === true}
                onChange={() => setFormData(prev => ({...prev, isAgency: true}))}
                className="form-checkbox h-4 w-4 text-[#6c25ff] rounded border-gray-300"
              />
              <span className="ml-2 text-sm">Yes</span>
            </label>
            
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="isAgency"
                checked={formData.isAgency === false}
                onChange={() => setFormData(prev => ({...prev, isAgency: false}))}
                className="form-checkbox h-4 w-4 text-[#6c25ff] rounded border-gray-300"
              />
              <span className="ml-2 text-sm">No</span>
            </label>
          </div>
        </div>
      </form>

      <div className="mt-auto pt-6">
        <button 
          className="w-full py-2 bg-[#6c25ff] text-white rounded-md text-base font-medium"
          onClick={handleSignin}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}