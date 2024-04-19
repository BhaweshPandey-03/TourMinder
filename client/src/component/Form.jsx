import { Button, colors } from '@mui/material';
import React, { useState } from 'react';
import '../styles/form.css';
// import 'dotenv/config';
// import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
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
  const [email, setEmail] = React.useState(false);

  const [open2, setOpen2] = useState(false);
  const handleClick = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const fetchData = async (body) => {
    try {
      const res = await fetch(`https://tourminder.onrender.com/tour-planner`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      console.log(typeof data);
      console.log(data);
      setTours(data.text);
      setEmail(true);
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
  const sendEmail = () => {
    console.log("mail clicked");
    const email = localStorage.getItem('email');
    const body = tours

    fetch("http://localhost:4500/send-mail", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        body
      })
    }).then((res) => res.json())
      .then((data) => console.log(data))
      .catch = (err) => {
        console.log(err);
      }
      handleClick();
     setTimeout(() => {
       setOpen2(false);
     },2000)
  }

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
<input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} min={getCurrentDate()} />

<label htmlFor="endDate">End Date</label>
<input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={getCurrentDate()} />
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

      {email && <button onClick={sendEmail} className='akash-btn mail-btn'>Get this via mail</button>}
       <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert
          onClose={handleClose2}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Your trip plan is sent to your email successfully !
        </Alert>
      </Snackbar> 
    </div>
  );
};

export default Form;
