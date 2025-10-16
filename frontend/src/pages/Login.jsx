import React, { useState, useContext, useEffect } from 'react';
import logo from '../assets/ducoe.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../App'; // Ensure this path is correct

function Login() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Local state for success message
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const location = useLocation();

  // Get success message from location state
  useEffect(() => {
    if (location.state?.successMessage) {
      setSuccessMessage(location.state.successMessage);
      // Clear the success message after 5 seconds
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [location.state]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { studentId, password });
      localStorage.setItem('token', response.data.token);
      login(); // Update authentication state

      // Navigate based on role
      switch (response.data.role) {
        case 'requester':
          navigate('/requester');
          break;
        case 'section-head':
          navigate('/section-head');
          break;
        case 'batch-head':
          navigate('/batch-head');
          break;
        case 'student-body':
          navigate('/student-body');
          break;
        default:
          setError('Invalid role');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Invalid credentials');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const isFormComplete = studentId && password;

  return (
    <div className='flex items-center justify-center w-screen h-screen relative overflow-hidden'>
      <img
        src={logo}
        alt="logo"
        className="absolute inset-0 object-contain w-full h-full opacity-90 blur-sm"
      />
      <div className="absolute inset-0 bg-black opacity-40" />
      
      <div className="relative z-10 flex flex-col gap-4 items-center p-6 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-black text-4xl font-bold">EDU-COE-BONO SYSTEM</h1>

        {/* Show success message only if it exists */}
        {successMessage && (
          <div className="bg-green-500 text-white p-3 rounded-lg shadow-md text-center mb-4">
            {successMessage}
          </div>
        )}
        <h1 className="text-black text-3xl">Login</h1>

        {error && <div className="text-red-500">{error}</div>} {/* Display error message */}
        
        <form className="flex flex-col items-center gap-4 w-full" onSubmit={handleLogin}>
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
                Loading...
              </span>
            ) : (
              'Login'
            )}
          </button>
          <Link to="/register">
            <h1 className='text-blue-900 hover:scale-105'>New to the system? <em>register</em></h1>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;