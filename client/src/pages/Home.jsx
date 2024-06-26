import React from 'react'
import "../styles/home.css"
import logo from "../assets/Logo.png"
import hero from "../assets/rafiki.png"
import { FaArrowRight, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="hero">
                <img src={hero} alt="hero image" />
            </div>
            <div className="akash-about">
                <p>Plan your tour with us, we will remind you in advance as well</p>
            </div>

            <div className="akash-buttons ">
                <button className="akash-btn">Get Started <FaArrowRight className='icon' /> </button>
                <button className="akash-btn" onClick={()=>navigate('/register')}>SignUp <FaUserPlus className='icon' /></button>
            </div >



        </div >
    )
}

export default Home
