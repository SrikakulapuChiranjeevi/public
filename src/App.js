// App.js
import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import initialData from './data/initialData';
import './App.css';

function App() {
  const [year, setYear] = useState(1993);
  const [people, setPeople] = useState(initialData);
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    // Log to check if handleUpdate is triggered
    console.log('Updating calendar for year:', year);

    // Example: Fetch data from initialData and modify as needed
    const updatedPeople = fetchUpdatedPeople();

    // Update state with the new list of people
    setPeople(updatedPeople);
    setUpdate(true);
  };

  const handleYearChange = (event) => {
    // Log to check if handleYearChange is triggered
    console.log('Updating year to:', event.target.value);
    setUpdate(false);
    // Update the year when the input value changes
    setYear(parseInt(event.target.value, 10));
  };

  // Function to fetch or update the list of people (replace with your logic)
 
 // App.js
// ...

const fetchUpdatedPeople = () => {
  // Example: Fetch data from initialData and modify as needed
  return initialData.map((person) => {
    const { name, birthday } = person;

    // Parse the correct date format 'DD/MM/YYYY'
    const [month, day, yearStr] = birthday.split('/');
    const updatedBirthday = new Date(`${yearStr}-${month}-${day}`);

    return {
      name,
      birthday: updatedBirthday,
      // Add other properties as needed
    };
  });
};

// ...

  useEffect(() => {
    // Log to check if the effect is triggered
    console.log('Year changed:', year);
  }, [year]);

  return (
    <div className="app">
      <div className="app__inputs">
        <label>Year</label>
      
        <input
          className="app__input"
          type="number"
          value={year}
          onChange={handleYearChange}
        /> 
        <button className="app__button" onClick={handleUpdate}>
          Update
        </button>
      </div>
      {update ?     <Calendar year={year} people={people} /> :''}
  
    </div>
  );
}

export default App;
