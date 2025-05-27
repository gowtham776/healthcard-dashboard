import React from 'react';
import '../styles/UpcomingSchedule.css';
import { upcomingSchedule } from '../data/upcoming';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingSchedule.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          <p className="day-title">On {daySchedule.day}</p>
          <div className="appointments-row">
            {daySchedule.appointments.map((appt, apptIndex) => (
              <div key={apptIndex} className="appointment-item">
                <span className="emoji">{appt.icon}</span>
                <div>
                  <p className="appt-title">{appt.title}</p>
                  <p className="appt-time">{appt.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
