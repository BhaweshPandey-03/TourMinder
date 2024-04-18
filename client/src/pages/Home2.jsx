import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import '../styles/home2.css'

const Home2 = () => {
    const [userName, setUserName] = useState('');
    const [greeting, setGreeting] = useState('');
    useEffect(() => {
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
        setGreeting("Good Night");
    }
    else {
        setGreeting("Good Day");
    }
    }, [])
    
  return (
    
    <div className='home2'>
        <Typography variant="h5">
        {greeting} <span>Bhawesh Pandey</span>,<br></br> Welcome to <span>TOURMINDER !</span>
    </Typography>
    </div>
  )
}

export default Home2