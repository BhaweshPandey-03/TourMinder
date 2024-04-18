import { Button, colors } from '@mui/material';
import React, { useState } from 'react';
import '../styles/form.css';
// import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';
import SimpleBackdrop from './SbtButton';

const Form = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tours, setTours] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const fetchData = async (body) => {
    try {
      const res = await fetch('http://localhost:4500/tour-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      console.log(typeof data);
      console.log(data);
      setTours(data.text);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      from,
      to,
      startDate,
      endDate
    }; 
    fetchData(body);
    setFrom('');
    setTo('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className='form_div'>
      <h3>
        <span>Make Plan Now !</span>
      </h3>   
      <form className='b-form' onSubmit={handleSubmit}>
        <label htmlFor="from">Your Place</label>
        <input type="text" id="from" value={from} placeholder="Enter your place..." onChange={(e) => setFrom(e.target.value)} />
        <label htmlFor="to">Your Destination</label>
        <input type="text" id="to" value={to} placeholder="Enter your destination..." onChange={(e) => setTo(e.target.value)} />
        
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label htmlFor="endDate">End Date</label>
        <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

        {/* <Button type="submit">Submit</Button> */}
        {/* <SimpleBackdrop  /> */}
        {
          <div>
      <Button type='submit' onClick={handleOpen}>submit</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
        }
        
      </form>
  
      <div className='data'>
        <div dangerouslySetInnerHTML={{ __html: tours.replace(/\*\*([^*]+)\*\*/g, "<h3>$1</h3>").replace(/\*([^*]+)\*/g, "<h4>$1</h4>").replace(/<\/h3>(.*?)<\/h3>/g, "</h3><ul>$1</ul>").replace(/<\/h4>(.*?)<\/h4>/g, "</h4><ul><li>$1</li></ul>") }}></div>
      </div>
    </div>
  );
};

export default Form;
