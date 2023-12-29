// components/PersonSquare.js
import React from 'react';
import PropTypes from 'prop-types';
import './PersonSquare.css';

const PersonSquare = ({ initials, columns }) => {
  const calculateWidth = () => {
    // Calculate the width based on the number of columns
    const maxWidth = 100; // Set a maximum width for each person square
    const widthPercentage = 100 / columns;
    const calculatedWidth = Math.min(maxWidth, widthPercentage) + '%';
    return calculatedWidth;
  };

  const calculateHeight = () => {
    // Calculate the height based on the number of rows
    const rowHeight = 30; // Set a fixed row height
    return rowHeight + 'px';
  };

  const style = columns === 1 ? { width: '100%', height: '100%' } : { width: calculateWidth(), height: calculateHeight() };

  return (
    <div className="day__person" style={style}>
      {initials}
    </div>
  );
};

PersonSquare.propTypes = {
  initials: PropTypes.string.isRequired,
  columns: PropTypes.number.isRequired,
};

export default PersonSquare;
