import React, { useState, useContext } from 'react';
import logo from '../assets/ducoe.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { 
        studentId, 
        name, 
        password,
        role: 'requester' // Hardcoded role
      });
      
   
      console.log(response.data); // Replace with your handling logic
      navigate('/', { state: { successMessage: 'Your account has been successfully created!' } });
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const isFormComplete = name && studentId && password;

  return (
    <div className="flex items-center justify-center w-screen h-screen relative overflow-hidden">
      <img
        src={logo}
        alt="logo"
        className="absolute inset-0 object-contain w-full h-full opacity-90 blur-sm"
      />
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="relative z-10 flex flex-col gap-4 items-center p-6 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-black text-4xl font-bold">EDU-COE-BONO SYSTEM</h1>
        <h1 className="text-black text-3xl">Register</h1>

        {error && <div className="text-red-500 font-bold">{error}</div>}
        <form className="flex flex-col items-center gap-4 w-full" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="ID"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setStudentId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className={`w-full p-3 rounded transition duration-200 ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
            disabled={loading || !isFormComplete}
          >
            {loading ? (
              <span className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z" />
                </svg>
                Registering User...
              </span>
            ) : (
              'Register'
            )}
          </button>
          <Link to="/"> <h1 className='text-blue-900 hover:cursor-pointer hover:text-blue-600'>Already have an account? <em>Login</em></h1></Link>

        </form>
      </div>
    </div>
  );
}

export default Register;