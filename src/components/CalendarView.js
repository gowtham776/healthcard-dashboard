import React from 'react';
import '../styles/CalendarView.css';
import { calendarAppointments } from '../data/calendarAppointments';
import { appointmentDetails } from '../data/appointmentDetails';

const CalendarView = () => {
  const weekDates = [25, 26, 27, 28, 29, 30, 31];
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const currentDay = 26;
  const allTimeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

  const getAppointmentForDayAndTime = (day, time) => {
    const dayAppointments = calendarAppointments.find(appt => appt.day === day);
    if (!dayAppointments) return null;
    const index = dayAppointments.times.indexOf(time);
    if (index === -1) return null;
    const detail = appointmentDetails.find(d => {
      const [start] = d.time.split('-');
      return start === time;
    });
    return detail || null;
  };

  const getTimeSlotsForDay = (day) => {
    const dayAppointments = calendarAppointments.find(appt => appt.day === day);
    if (!dayAppointments) return [];
    const times = dayAppointments.times;
    const slots = new Set();
    times.forEach(time => {
      const timeIndex = allTimeSlots.indexOf(time);
      if (timeIndex > 0) slots.add(allTimeSlots[timeIndex - 1]); // Hour before
      slots.add(time); // Appointment time
      if (timeIndex < allTimeSlots.length - 1) slots.add(allTimeSlots[timeIndex + 1]); // Hour after
    });
    return Array.from(slots).sort();
  };

  const allDaySlots = weekDates.map(day => getTimeSlotsForDay(day));
  const maxRows = Math.max(...allDaySlots.map(slots => slots.length));

  const currentAppointment = getAppointmentForDayAndTime(currentDay, '09:00');
  const nextAppointment = getAppointmentForDayAndTime(28, '11:00');

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header-bar">
        <h3>October 2021</h3>
        <div className="calendar-nav">
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>
      <div className="calendar-grid">
        {days.map((day, i) => (
          <div key={i} className={`calendar-day-header ${weekDates[i] <= currentDay ? 'active' : ''}`}>
            <div className="day-label">{day}</div>
            <div className="date-label">{weekDates[i]}</div>
          </div>
        ))}
        {Array.from({ length: maxRows }).map((_, rowIndex) =>
          weekDates.map((date, colIndex) => {
            const timeSlots = allDaySlots[colIndex];
            const time = timeSlots[rowIndex];
            if (!time) return <div key={`${rowIndex}-${colIndex}`} className="calendar-slot" />;
            const appointment = getAppointmentForDayAndTime(date, time);
            const isCurrent = date === currentDay && time === '09:00';
            const isCompleted = date < currentDay || (date === currentDay && time < '09:00');
            const isUpcoming = date > currentDay && appointment;
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`calendar-slot ${isCurrent ? 'current-slot' : ''} ${isUpcoming ? 'next-slot' : ''} ${isCompleted ? 'completed-slot' : ''}`}
              >
                {appointment ? time : (isCompleted ? '—' : time)}
              </div>
            );
          })
        )}
      </div>
      <div className="appointment-cards">
        {currentAppointment && (
          <div className="appointment-card highlighted">
            <div className="card-content">
              <div className="card-title-wrapper">
                <span className="card-title">{currentAppointment.title}</span>
                <span className="emoji">🦷</span>
              </div>
              <div className="card-time">{currentAppointment.time}</div>
              <div className="card-name">{currentAppointment.name}</div>
            </div>
          </div>
        )}
        {nextAppointment && (
          <div className="appointment-card upcoming">
            <div className="card-content">
              <div className="card-title-wrapper">
                <span className="card-title">{nextAppointment.title}</span>
                <span className="emoji">💪</span>
              </div>
              <div className="card-time">{nextAppointment.time}</div>
              <div className="card-name">{nextAppointment.name}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;