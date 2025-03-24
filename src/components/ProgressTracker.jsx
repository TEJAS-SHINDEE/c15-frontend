import React, { useEffect, useState } from "react";
import './ProgressTracker.css'; 

const ProgressTracker = ({ userId }) => {
  const [attemptedDays, setAttemptedDays] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Set default to current year

  useEffect(() => {
    fetch(`https://c15-backend-s9le.onrender.com/api/progress/${userId}?year=${selectedYear}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.attemptedDays)) {
          setAttemptedDays(data.attemptedDays);
        } else {
          console.error("Invalid data structure:", data);
        }
      })
      .catch((error) => console.error("Error fetching progress:", error));
  }, [userId, selectedYear]); // Add selectedYear as a dependency

  // Function to generate a calendar for the selected year
  const renderCalendar = () => {
    const months = Array.from({ length: 12 }, (_, i) => new Date(selectedYear, i).toLocaleString('default', { month: 'long' }));
    
    return (
      <div className="calendar">
        {months.map((month, monthIndex) => {
          const daysInMonth = new Date(selectedYear, monthIndex + 1, 0).getDate(); // Get number of days in the month
          return (
            <div key={monthIndex} className="month">
              <h4>{month}</h4>
              <div className="days">
                {Array.from({ length: daysInMonth }, (_, dayIndex) => {
                  const dateString = `${selectedYear}-${String(monthIndex + 1).padStart(2, '0')}-${String(dayIndex + 1).padStart(2, '0')}`;
                  const isAttempted = attemptedDays.includes(dateString);
                  return (
                    <div key={dayIndex} className={`day ${isAttempted ? 'attempted' : 'not-attempted'}`}>
                      {dayIndex + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Handler to change the selected year
  const handleYearChange = (event) => {
    setSelectedYear(Number(event.target.value));
  };

  return (
    <div>
      <h3>Your Progress</h3>
      <label htmlFor="year-selector">Select Year: </label>
      <select id="year-selector" value={selectedYear} onChange={handleYearChange}>
        {/* Generate options for the last 5 years and the current year */}
        {Array.from({ length: 6 }, (_, i) => {
          const year = new Date().getFullYear() - i;
          return <option key={year} value={year}>{year}</option>;
        })}
      </select>
      {renderCalendar()}
    </div>
  );
};

export default ProgressTracker;