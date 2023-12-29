// DayCard.js
import React from 'react';
import PersonSquare from './PersonSquare';
import PropTypes from 'prop-types';

const DayCard = ({ day, year, people }) => {
  const getPeopleForDay = () => {
    const peopleForDay = people.filter((person) => {
      let birthdayDate;

      if (person.birthday instanceof Date) {
        birthdayDate = person.birthday;
      } else if (typeof person.birthday === 'string') {
        // Assuming person.birthday is in the format 'MM/DD/YYYY'
        const [month, day, yearStr] = person.birthday.split('/');
        birthdayDate = new Date(`${yearStr}-${month}-${day}`);
      } else {
        return false;
      }

      const birthdayYear = birthdayDate.getFullYear();
      return birthdayDate.getDay() === getDayIndex(day) && birthdayYear === year;
    });

    peopleForDay.sort((a, b) => a.birthday - b.birthday);

    return peopleForDay.map((person, index) => ({
      initials: getInitials(person.name),
      columns: getColumns(peopleForDay.length),
    }));
  };

  const getDayIndex = (day) => {
    const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    return daysOfWeek.indexOf(day);
  };

  const getInitials = (name) => {
    if (name) {
      const nameParts = name.split(' ');
      return nameParts
        .map((part) => part.charAt(0).toUpperCase())
        .join('')
        .slice(0, 2);
    } else {
      return '';
    }
  };

  const getColumns = (numPeople) => {
    // Define the maximum number of columns you want
    const maxColumns = 4;

    // Calculate the number of columns based on the number of people
    return Math.min(numPeople, maxColumns);
  };
  const renderBirthdayLabel = () => {
    const peopleCount = getPeopleForDay().length;
    if (peopleCount === 0) {
      return <div className="day__label">No birthdays</div>;
    } else {
      return <div className="day__label">{peopleCount} {peopleCount === 1 ? 'birthday' : 'birthdays'}</div>;
    }
  };

  return (
    
    <li className={`cal__day ${getPeopleForDay().length === 0 ? 'day--empty' : ''}`} data-day={day}>
      <div className="day__date"></div>
      <div className="day__people">
        {getPeopleForDay().map((person, index) => (
          <PersonSquare key={person.initials} initials={person.initials} columns={person.columns} />
        ))}
      </div>
      {renderBirthdayLabel()}
    </li>
  );
};

DayCard.propTypes = {
  day: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  people: PropTypes.array.isRequired,
};

export default DayCard;
