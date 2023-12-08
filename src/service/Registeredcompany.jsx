import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch registered companies from your backend API
    axios.get('http://localhost:7070/api/mifotra/mifotra/companies')
      .then((response) => {
        setCompanies(response.data.companies);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching companies:', error);
        setLoading(false);
      });
  }, []);


    return (
      <div className="container mx-auto px-4 py-8 bg-gray-300">
        <h1 className="text-3xl font-semibold text-indigo-800 mb-4">Registered Companies</h1>
  
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-indigo-500 text-white">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Company Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Phone Number
                </th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={company._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white hover:bg-gray-200'}>
                  <td className="px-6 py-4 whitespace-no-wrap">{company.CompanyName}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{company.email}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{company.Location}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{company.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
  
  export default CompanyList;
  