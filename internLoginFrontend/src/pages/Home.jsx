import { useState } from 'react';
import { Camera } from 'lucide-react';

export default function Home() {
  const [user] = useState({
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    profileImage: '/api/placeholder/150/150'
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
     
      <div className="py-6 px-6 bg-white">
        <h1 className="text-xl  text-gray-900  text-light">Account Settings</h1>
      </div>

     
      <div className="pb-6 border-b border-gray-200 bg-gray-100 px-6  py-6">
        <div className="flex items-start space-x-4 ">
          
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src={"https://images.unsplash.com/photo-1668191174012-7d5a78e454a5?q=80&w=3488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] rounded-full p-1.5">
              <Camera className="text-white w-3 h-3" />
            </div>
          </div>
          
        
          <div className="flex flex-col pt-1">
            <h2 className="text-lg font-medium text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

       
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

     
      <div className="flex-grow  border-gray-200"></div>
      <div className="flex-grow  border-gray-200"></div>
    </div>
  );
}