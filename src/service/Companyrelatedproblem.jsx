import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyProblemReports = ({ companyId, companyName }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem("token"),
      },
    };
    fetch("http://localhost:7070/api/company/company", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Check if data.reports is an array or not
        setReports(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">{companyName} Problem Reports</h1>

      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading...</p>
      ) : reports.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No problem reports found for {companyName}.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Attachment
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report._id}>
                  <td className="px-6 py-4 whitespace-no-wrap">{report.firstName}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{report.email}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{report.phone}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{report.description}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {/* Render attachment links here */}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">{new Date(report.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompanyProblemReports;
