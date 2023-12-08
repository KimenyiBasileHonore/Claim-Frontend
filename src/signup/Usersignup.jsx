import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import signupImage from '../pic/signupImage.jpg';

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nID: '',
    phone: '',
    email: '',
    password: '',
    role: 'citizen',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:7070/api/user/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log('User registered successfully');
        navigate('/Userdashboard');
      } else {
        console.error('Error registering user');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-bold text-center mb-4">User Register</h2>
        <div className="flex">
          <form onSubmit={handleSubmit} className="w-1/2 pr-4"> {/* Adjust the width as needed */}
            <div className="mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-900 bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-900 bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="nID"
                placeholder="National ID"
                value={formData.nID}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-900 bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-900 bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-900 bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
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
          Sign Up
        </button>
          </form>
          <div className="w-1/2"> {/* Adjust the width as needed */}
            <img src={signupImage} alt="Signup" className="w-full h-full" /> {/* Use your image */}
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <Link to="/userlogin" className="text-blue-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
