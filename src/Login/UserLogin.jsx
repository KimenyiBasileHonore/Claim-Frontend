import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import loginimage from "../pic/loginimage.jpg"
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7070/api/user/user/login', formData);

      if (response.status === 200) {
        console.log('User logged in successfully');
        navigate('/Userdashboard');
        // Redirect to the user dashboard or home page after successful login
      } else {
        console.error('Invalid credentials');
        setErrorMessage('Invalid credentials'); 
        // Handle invalid credentials and show an error message to the user
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrorMessage('Email or password is not correct. Please try again later.');
      // Handle network errors and show a message to the user
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2"> {/* Adjust the width here */}
        <h2 className="text-2xl font-bold text-center mb-4">User Log In</h2>
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">
            {errorMessage}
          </div>
        )}
        <div className="flex">
          <form onSubmit={handleSubmit} className="w-1/2 pr-4">
            <div className="mb-4 ">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border  rounded focus:outline-none focus:border-blue-900 bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-900 bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Log In
            </button>
            {/* Use the FontAwesomeIcon component for the Back icon */}
            <div className="mt-4">
              <a href="/Usersignup" className="flex items-center text-blue-500 hover:underline">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-1" /> Back to Sign Up
              </a>
            </div>
            <div className="mt-4 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to home page
          </Link>
        </div>
          </form>
          <div className="w-1/2"> {/* Adjust the width as needed */}
            <img src={loginimage} alt="Login" className="w-full h-full" /> {/* Use your image */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;





