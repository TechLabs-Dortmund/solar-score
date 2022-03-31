import React from 'react';
import Dashboard from '../../views/dashboard/Dashboard';
import { Navbar, Prediction} from '../../components';
import './dashboardpage.css';

const DashboardPage = () => {
  return (
    <div className="Dashboard">
     <div className="gradient__bg">
     <Navbar />
     </div>
      <div className="solarscore__flexheader gradient__bg section__margin">
      <Dashboard/>
      {/* <Prediction /> */}
      </div>
  </div>
  )
};

export default DashboardPage;
