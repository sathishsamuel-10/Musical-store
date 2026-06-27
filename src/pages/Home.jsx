import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import hero from "../assets/instument.png";
import { Facebook,Instagram,Twitter } from '@boxicons/react';


const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    return (
        <>
            {/* NEW HERO SECTION */}
            <div className="home">
                <section className="hero-new">
                    <div className="hero-new-text">

                        <h1>Welcome to Rhythm Store </h1>

                        <p data-aos="fade-up" data-aos-delay="100">
                            <span style={{ color: '#A18664' }} > Rhythm</span> Caters all your Musical Needs
                        </p>

                        <div className="hero-new-buttons" data-aos="fade-up" data-aos-delay="200">
                           <a href="#instrumentSection"> <button  className="menu-btn">Book Now</button></a>
                            <button className="table-btn">Know More</button>
                        </div>

                        <div className="hero-socials" data-aos="fade-up" data-aos-delay="300">
                            
                            <span><Facebook /></span>
                            <span><Instagram /></span>
                            <span><Twitter /></span>
                        </div>
                    </div>

                    <div className="hero-new-img" data-aos="fade-left" data-aos-delay="150">
                        <img src={hero} alt="Hero" />
                    </div>
                </section>

                {/* WHAT'S ON YOUR MIND */}
                <section className="mind-section">
                    <h2 data-aos="fade-up">Our Brand's</h2>

                    <div className="mind-list">
                        <div className="mind-item" data-aos="zoom-in" data-aos-delay="100">
                            <img src="/public/yamaha.jpeg" alt="Yamaha" />
                            <p>Yamaha</p>
                        </div>
                        <div className="mind-item" data-aos="zoom-in" data-aos-delay="200">
                            <img src="/public/ashton.png" alt="Ashton" />
                            <p>Ashton</p>
                        </div>
                        <div className="mind-item" data-aos="zoom-in" data-aos-delay="300">
                            <img src="/public/fender.jpeg" alt="Fender" />
                            <p>Fender</p>
                        </div>
                        <div className="mind-item" data-aos="zoom-in" data-aos-delay="400">
                            <img src="/public/roland.jpeg" alt="Roland" />
                            <p>Roland</p>
                        </div>
                        <div className="mind-item" data-aos="zoom-in" data-aos-delay="500">
                            <img src="/public/havana.jpeg" alt="Havana" />
                            <p>Havana</p>
                        </div>
                    </div>
                </section>

                {/* OUR SPECIAL DISHES */}
                <section className="special-section" id="instrumentSection">
                    <h2 data-aos="fade-up" >INSTRUMENTS</h2>
                    <p className="sub" data-aos="fade-up" data-aos-delay="100">Explore the perfect instruments.</p>

                    <div className="special-grid">
                        <div className="dish-card" data-aos="flip-left" data-aos-delay="150">
                            <img src="/public/piano.jpg" alt="Home Foods" />
                            <h4 >KEYBOARD</h4>
                        </div>

                        <div className="dish-card" data-aos="flip-left" data-aos-delay="250">
                            <img src="/public/guitar.jpeg" alt="Pure Veg" />
                            <h4>GUITAR</h4>
                        </div>

                        <div className="dish-card" data-aos="flip-left" data-aos-delay="350">
                            <img src="/public/drums.jpeg" alt="Diet Meal" />
                            <h4>DRUMS</h4>

                        </div>

                        <div className="dish-card" data-aos="flip-left" data-aos-delay="450">
                            <img src="/public/audioEquipments.jpeg" alt="Traditional Bowl" />
                            <h4>AUDIO EQUIPMENT</h4>

                        </div>
                    </div>
                </section>
                {/* WELCOME + CHEF SECTION */}
                <section className="welcome-section">
                    {/* TOP PART */}
                    <div className="welcome-top">
                        <div className="welcome-img" data-aos="fade-right">
                            <img src="/public/piano2.png" alt="Food Bowl" />
                            <div className="grt"></div>
                        </div>

                        <div className="welcome-text" data-aos="fade-left" data-aos-delay="100">
                            <h2>Welcome to our Music World</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div className="welcome-buttons" data-aos="fade-up" data-aos-delay="200">
                                <button className="menu-btn">Menu</button>
                                <button className="table-btn">Book a table</button>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM PART */}
                    <div className="chef-section">
                        <div className="chef-text" data-aos="fade-right">
                            <h2>Your Personal Music Instructor</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <ul>
                                <li>
                                    <i className="bx bx-check-circle"></i>
                                    Lorem ipsum dolor sit amet, consectetur
                                </li>
                                <li>
                                    <i className="bx bx-check-circle"></i>
                                    Lorem ipsum dolor sit amet, consectetur
                                </li>
                            </ul>
                        </div>

                        <div className="chef-img" data-aos="fade-left" data-aos-delay="150">
                            <img src="/public/violin.png" alt="violin" />
                        </div>
                    </div>
                </section>
            </div>





        </>
    );
};


export default Home;
