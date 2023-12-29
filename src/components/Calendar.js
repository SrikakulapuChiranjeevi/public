// components/Calendar.js
import React from 'react';
import DayCard from './DayCard';
import PropTypes from 'prop-types';
import './Calender.css';
const Calendar = ({ year, people }) => {
  const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  return (
    <div id="work-area">
      {/* <h1 className="cal__title">Work Area</h1> */}
      <br />
      <ul className="calendar clearfix js-calendar">
        {daysOfWeek.map((day) => (
          <DayCard key={day} day={day} year={year} people={people} />
        ))}
      </ul>
    </div>
  );
};

Calendar.propTypes = {
  year: PropTypes.number.isRequired,
  people: PropTypes.array.isRequired,
};

export default Calendar;
