import './train.css';
import React, { useState } from "react";
export default function Train()
{
    const [selectedLine, setSelectedLine] = useState('');
    const [startStation, setStartStation] = useState('');
    const [destStation, setDestStation] = useState('');
    
    const [timeofJourney, settimeofJourney] = useState('');
    const [dateofJourney, setdateofJourney] =useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { selectedLine,startStation, destStation, dateofJourney,timeofJourney });
  };
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 9; hour <= 21; hour++) {
      for (let minute = 0; minute < 60; minute += 60) {
        const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
        const formattedMinute = minute === 0 ? '00' : `${minute}`;
        const time = `${formattedHour}:${formattedMinute}`;
        options.push(<option key={time} value={time}>{time}</option>);
      }
    }
    return options;
  };

    return (
      <div className='train-overlay-container'>
      <div className="train-overlay">
      <div className='train-advertisement'></div>
        <div className='train-form'>
        <form  onSubmit={handleSubmit}>
            <h1>Book a Train</h1>
        <label>
        Metro Line:
        <select value={selectedLine} onChange={(e) => setSelectedLine(e.target.value)}>
          <option value="">Select Metro Line</option>
          <option value="N-S">N-S Metro</option>
          <option value="E-W">E-W Metro</option>
        </select>
      </label>
        <label>
        Start Station:
        <input
          type="text"
          value={startStation}
          onChange={(e) => setStartStation(e.target.value)}
        />
      </label>

      <label>
        Destination Station:
        <input
          type="text"
          value={destStation}
          onChange={(e) => setDestStation(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={dateofJourney}
          onChange={(e) => setdateofJourney(e.target.value)}
        />
      </label>
      <label>
        Time : 
        <select value={timeofJourney} onChange={(e) => settimeofJourney(e.target.value)}>
            <option value="">Select Time</option>
            {generateTimeOptions()}
          </select>
      </label>
      <div className="train-button">
      <button type="submit">BOOK</button>
      </div>
        </form>
        
      </div>
      
      </div>
      </div>
    );
  };
  