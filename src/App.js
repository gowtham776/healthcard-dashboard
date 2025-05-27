import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent'; // Import the DashboardMainContent component
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Sidebar />
        <DashboardMainContent /> {/* Replace placeholder with DashboardMainContent */}
      </div>
    </div>
  );
};

export default App;