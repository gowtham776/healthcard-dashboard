import React from 'react';
import '../styles/DashboardMainContent.css';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <div className="left-column">
        <AnatomySection />
        <ActivityFeed />
      </div>
      <div className="right-column">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;