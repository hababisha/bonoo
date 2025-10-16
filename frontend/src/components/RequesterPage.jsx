import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App'; // Adjust the import path as needed
import logo from '../assets/ducoe.jpg';
import '@fortawesome/fontawesome-free/css/all.css';

function RequesterPage() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); // Call the logout function to update authentication state
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={logo}
        alt="logo"
        className="absolute inset-0 object-contain w-full h-full opacity-90 blur-sm" 
      />
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="flex items-center justify-center w-full h-full flex-col">
        <div className='w-[23em] h-[20em] text-white rounded-xl z-50 bg-blue-600 flex flex-col gap-1'>
          
          <div className='flex justify-between'>
            <div className="flex-col pt-5 px-4 flex items-start justify-start">
              <div>Babi Eyuel ID: 0303/14</div>
              <div className="text-xs">3rd Year | Computer Department</div>    
            </div>
            <div className='flex justify-end pt-3 px-4 hover:cursor-pointer '>
              <i 
                className="fa fa-times text-gray-200 text-xl mr-2 hover:text-red-500 hover:scale-105"
                onClick={handleLogout} // Add the onClick handler
              ></i>
            </div>
          </div>

          <div className='flex gap-16 px-4 py-2'>
            <div className='text-sm'>
              <div>Leave Date: </div>
              <div>Return Date: </div>
            </div>
            <div className='text-sm'>
              <div>Leave time: </div>
              <div>Return time: </div>
            </div>
          </div>

          <div className='flex text-xs px-4 pb-2 gap-2'>
            <div>Approval Status:</div>
            <div className='flex flex-col items-center justify-center'>
              <div className="flex space-x-2 text-xs mb-1">
                <div className="bg-blue-800 p-1 w-[6em] h-[2em] text-center">Section H</div>
                <div className="bg-blue-800 p-1 w-[6em] h-[2em] text-center">Batch H</div>
                <div className="bg-blue-800 p-1 w-[6em] h-[2em] text-center">Student B</div>
              </div>
              <div className="flex space-x-2 text-xs">
                <div className="bg-yellow-300 text-black p-1 w-[6em] h-[2em] text-center">Pending</div>
                <div className="bg-yellow-300 text-black p-1 w-[6em] h-[2em] text-center">Pending</div>
                <div className="bg-yellow-300 text-black p-1 w-[6em] h-[2em] text-center">Pending</div>
              </div>
            </div>
          </div>
          
          <div className='px-4'>
            <textarea 
              placeholder='Description' 
              className='px-4 w-full h-[6em] bg-blue-100 rounded-lg py-2' 
            />
          </div>
        </div>
        
        {/* Submit Button */}
        <button className="mt-6 bg-blue-700 z-50 relative text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-900 transition duration-200">
          Request
        </button>
        
      </div>
    </div>
  );
}

export default RequesterPage;