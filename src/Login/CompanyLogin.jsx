import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import companylogin from "../pic/companylogin.jpg";

function CompanyLogin() {
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
      const response = await axios.post('http://localhost:7070/api/user/company/login', formData);

      if (response.status === 200) {
        console.log('Company logged in successfully');
        const data = await response.data;
        localStorage.setItem("token", data.token);
        navigate('/Companydashboard');
      } else {
        console.error('Invalid credentials');
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrorMessage('Email or password is not correct. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-4">Company Login</h2>
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">
            {errorMessage}
          </div>
        )}

        <div className="flex">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-80 p-2 mb-4 border rounded"
            /><br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-80 p-2 mb-4 border rounded"
            /><br />
            <button
              type="submit"
              className="w-40 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Log In
            </button>
            <div className="mt-4">
              <a href="/Companysignup" className="flex items-center text-blue-500 hover:underline">
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
            <img src={companylogin} alt="Login" className="w-full h-full" /> {/* Use your image */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogin;




