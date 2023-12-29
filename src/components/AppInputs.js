// components/AppInputs.js
import React from 'react';
import PropTypes from 'prop-types';

const AppInputs = ({ year, setYear, onUpdate }) => {
  return (
    <div className="app__inputs">
      <textarea
        className="app__txt js-json"
        id="json-input"
        placeholder="Paste your friends list json here."
      ></textarea>

      <div className="app__actions">
        <label>Year</label>
        <input
          className="app__input js-year"
          type="text"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value, 10))}
        />
        <button className="app__button js-update" onClick={onUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

AppInputs.propTypes = {
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AppInputs;
