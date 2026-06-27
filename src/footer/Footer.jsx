import React from "react";

import "./Footer.css" 
import { Facebook,Instagram,Twitter } from '@boxicons/react';


const Footer = () => {
    return (
        <footer className="footer" data-aos="fade-up">
            <div className="footer-top">
                <div className="footer-col" data-aos="fade-right">
                    <h2 className="footer-logo">Rhythm</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                        <span className="learn"> Learn more</span>
                    </p>
                     </div>
                     <div className="footer-col">
                      <div className="hours">
                 <h4>OPENING HOURS</h4>
                  
                        <div>
                            <p>Monday - Friday</p>
                            <span>8:00 am to 9:00 pm</span>
                        </div>
                        <div>
                            <p>Saturday</p>
                            <span>8:00 am to 9:00 pm</span>
                        </div>
                        <div>
                            <p>Sunday</p>
                            <span className="closed">CLOSED</span>
                        </div>
                    </div>
                    </div>

                <div className="footer-col">
                    <h4>NAVIGATION</h4>
                    <ul>
                        <li>Menu</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Instruments</li>
                        <li>Book Now</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>INSTRUMENTS</h4>
                    <ul>
                        <li>Piano</li>
                        <li>Guitar</li>
                        <li>Manual Drums</li>
                        <li>Veena</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>FOLLOW US</h4>
                    <div className="socials">
                        <span><Facebook/></span>
                        <span><Instagram/></span>
                        <span><Twitter/></span>

                    </div>
                </div>
                  
            </div>

            <div className="footer-bottom">
                ©2026 Restaurants. All Right Reserved. Developed by <b>Sathish</b>
            </div>
        </footer>
    );
};
export default Footer;