import React from 'react';
import '../styles/AnatomySection.css';
import { anatomyData } from '../data/anatomyData';
import { healthStatusData } from '../data/healthStatusData';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="anatomy-container">
        {/* Anatomy Image Section */}
        <div className="anatomy-image-wrapper">
          <div className="anatomy-image-container">
            <img
              src="https://img.freepik.com/free-photo/human-body-frontal_1048-5345.jpg?semt=ais_hybrid&w=740"
              alt="Human Anatomy"
              className="anatomy-image"
            />
            {anatomyData.map((item, index) => (
              <div
                key={index}
                className="anatomy-indicator"
                style={{
                  top: item.position.top,
                  left: item.position.left,
                  right: item.position.right,
                  bottom: item.position.bottom,
                  backgroundColor: item.color,
                }}
              >
                <span className="scanner-sign">◆</span>
                <span className="indicator-label">{item.emoji} {item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Health Status Bars Section */}
        <div className="health-status-section">
          <h3 className="health-status-heading">This Week</h3>
          <div className="health-status-items">
            {healthStatusData.map((status, index) => (
              <div key={index} className="health-status-item">
                <div className="health-status-header">
                  <h4 className="health-status-title">{status.emoji} {status.title}</h4>
                  <span className="health-status-date">{status.date}</span>
                </div>
                <div className="status-bar">
                  <div
                    className="status-bar-fill"
                    style={{
                      width: "70%",
                      backgroundColor: status.color,
                    }}
                  ></div>
                </div>
                <p className="health-status-detail">{status.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;