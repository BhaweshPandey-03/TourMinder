import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import '../styles/home2.css'
import Form from '../component/Form';

const Home2 = () => {
    const [userName, setUserName] = useState('');
    const [greeting, setGreeting] = useState('');
    useEffect(() => {
        const storedUserName = localStorage.getItem('username');
        if (storedUserName) {
            setUserName(storedUserName);
        }

        const time = new Date().toTimeString().split(" ")[0].slice(0,2);
        console.log(time);

    if(time > 4 && time < 12){
        setGreeting("Good Morning");
    } 
    else if(time > 12 && time < 16){
        setGreeting("Good Afternoon");
    }
    else if(time > 16 && time < 20){
        setGreeting("Good Evening");
    }
    else if(time > 20 && time < 24){
        setGreeting("Good Evening");
    }
    else {
        setGreeting("Good Evening");
    }
    }, [])
    
  return (
    
    <div className='home2'>
        <Typography variant="h5">
        {greeting} <span>{userName}</span>,<br></br> Welcome to <span>TOURMINDER !</span>
    </Typography>
    <br>
    </br>
    <Form />
    </div>
  )
}

export default Home2