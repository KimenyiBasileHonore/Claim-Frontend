import React, { useState } from 'react';
import axios from 'axios';
import mifotra from "../pic/mifotra.jpg";
import { Link, useNavigate } from 'react-router-dom';

function Login ()  {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.post('http://localhost:7070/api/mifotra/admin/login', formData);
  
      if (response.status === 200) {
    
        console.log('Login successful');
        navigate('/Mifotradashboard');
      } else {
        console.error('Login failed');
        setErrorMessage('Invalid credentials'); // You can customize the error message
      }
    }  catch (error) {
      console.error('Network error:', error);
      setErrorMessage('Email or password is not correct. Please try again later.');
    }
    
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md w-1/2">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">
            {errorMessage}
          </div>
        )}

        <div className="flex">
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
            <div className="mt-4 text-center">
              <Link to="/" className="text-blue-500 hover:underline">
                Back to home page
              </Link>
            </div>
          </form>
          <div className="w-1/2"> {/* Adjust the width as needed */}
            <img src={mifotra} alt="Login" className="w-full h-full" /> {/* Use your image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
