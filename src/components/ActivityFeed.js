import React from 'react';
import '../styles/ActivityFeed.css';
import { activityData } from '../data/activityData';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments on this week</p>
      <div className="activity-chart">
        {activityData.map((data, index) => (
          <div key={index} className="chart-bar">
            <div className="bar" style={{ height: data.height }}></div>
            <span>{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;