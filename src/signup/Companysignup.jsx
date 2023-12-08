import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import company from "../pic/company.jpg"

function CompanySignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    CompanyName: '',
    Location: '',
    phone: '',
    email: '',
    password: '',
    role: 'company', // Default role is "company"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7070/api/user/company/signup', formData);

      if (response.status === 201) {
        console.log('Company registered successfully');
        navigate('/Companydashboard');
      } else {
        console.error('Error registering company');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-4">Company Signup</h2>
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="CompanyName"
              placeholder="Company Name"
              value={formData.CompanyName}
              onChange={handleChange}
              className="w-80 p-2 mb-4 border rounded bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
            /><br />
            <input
              type="text"
              name="Location"
              placeholder="Location"
              value={formData.Location}
              onChange={handleChange}
              className="w-80 p-2 mb-4 border rounded bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
            /><br />
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-80 p-2 mb-4 border rounded bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
            /><br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-80 p-2 mb-4 border rounded bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
            /><br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-80 p-2 mb-4 border rounded bg-white border-2 border-gray-300 hover:border-blue-900 hover:shadow-md"
            /><br />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
            <div className="mt-4 text-center">
              <Link to="/companylogin" className="text-blue-500 hover:underline">
                Already have an account? Login
              </Link>
            </div>
            <div className="mt-4 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to home page
          </Link>
        </div>
          </form>
          <div className="w-1/2"> {/* Adjust the width as needed */}
            <img src={company} alt="Companysignup" className="w-full h-full" /> {/* Use your image */}
          </div>
        </div>
      </div>
    </div >
  );
}

export default CompanySignup;



