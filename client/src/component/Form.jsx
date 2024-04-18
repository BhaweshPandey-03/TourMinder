import { Button } from '@mui/material';
import React, { Component, useState } from 'react'

const Form = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [tours, setTours] = useState('');

  const fetchData = async (body) => {
    try {
      const res  = fetch('http://localhost:3000/tours', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      });
      const data = await res.json();
      console.log(data);
      setTours(data)
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      from,
      to,
      startDate,
      endDate
    } 
    fetchData(body);
  }

  return (

    <div>
    <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="from">Your Place</label>
        <input type="text" id="from" value={from} placeholder="Enter your place..."/>
        <label htmlFor="to">Your Destination</label>
        <input type="text" id="to" value={to} placeholder="Enter your destination..."/>
        
        <label htmlFor="Start Date">Start Date</label>
        <input type="calander" id="Start Date" value={startDate} />
        <label htmlFor="End Date">End Date</label>
        <input type="calander" id="End Date" value={endDate} />

        <Button type="submit">Submit</Button>
    </form>
    yoo
    </div>

     )
}

export default Form;