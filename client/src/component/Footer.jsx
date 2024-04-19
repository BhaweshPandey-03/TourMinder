import React from 'react';
import "../styles/footer.css";
import logo from "../assets/Logo.png";
import google from "../assets/pngwing1.com.png";
import apple from "../assets/pngwing.com.png";
import { FaFacebook, FaTelegram, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer'>
            <div className="foot_one">
                <div className="about">
                    <img className="akash-logo" src={logo} alt="" />
                    <h6>TourMindzer: Your AI-Powered Travel Companion! Unlock personalized trip suggestions tailored to your dream destinations, all at the tip of your fingers. </h6>
                </div>

                <div className="contact">
                    <table>
                        <thead>
                            <tr>
                                <th>General</th>
                                <th>Resources</th>
                                <th>Legal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>About Us</td>
                                <td>Build With Google AI</td>
                                <td>Terms & Conditions</td>
                            </tr>
                            <tr>
                                <td>Careers</td>
                                <td>Transforming trips</td>
                                <td>Privacy Policy</td>
                            </tr>
                            <tr>
                                <td>Press</td>
                                <td>Merchant Stories</td>
                                <td>Redressal Policy</td>
                            </tr>
                            <tr>
                                <td>Contact Us</td>
                                <td>Success Stories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            <div className="getUs">
                <h5>GET OUR APP TODAY</h5>
                <div className="google_play">
                    <img src={google} alt="playstore" />
                    <img src={apple} alt="appstore" />
                </div>
            </div>
            <hr />
            <div className="credit">
                <div className="credit_tag">
                    <p>© 2024 All Rights Reserved</p>
                </div>
                <div className="box">
                    <FaFacebook className="social-icon" />
                    <FaTelegram className="social-icon" />
                    <FaYoutube className="social-icon" />
                    <FaTwitter className="social-icon" />
                    <FaInstagram className="social-icon" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
