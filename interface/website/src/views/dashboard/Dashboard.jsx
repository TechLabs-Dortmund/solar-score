import React, { useState, useEffect, Fragment } from 'react';
import './dashboard.css'

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login');
    } else {
      fetch('http://127.0.0.1:8000/api/v1/users/auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUserEmail(data.username);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      {loading === false && (
        <Fragment>
          <div className="solarscore__dashboard-content">
            <h1>Hello {userEmail}!</h1>
            <p>This page is still under development but you can already see your newest prediction here.</p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
