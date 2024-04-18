import React from 'react'
import "../styles/home.css"
import logo from "../assets/Logo.png"
import hero from "../assets/rafiki.png"
import { FaArrowRight, FaUserPlus } from 'react-icons/fa';
import Footer from '../component/Footer';


const Home = () => {
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
                <button className="akash-btn">SignUp <FaUserPlus className='icon' /></button>
            </div >

            <Footer />

        </div >
    )
}

export default Home
