import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css"
import hero from "../assets/instument.png";
import { Facebook, Instagram, Twitter, GuitarAmp, HeadphoneAlt, Spanner, Music, } from '@boxicons/react';
import {
    MdFavorite, MdSettings, MdPrecisionManufacturing, MdConstruction, MdSupportAgent, MdSettingsApplications
    , MdLockClock, MdCastForEducation
} from 'react-icons/md';

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    return (
        <>
            <div className="service">
                <h3  data-aos="fade-up" data-aos-delay="100">OUR SERVICES</h3>
                <h1  data-aos="fade-up" data-aos-delay="100">What We Offer</h1>
                <div className="grid-item">
                    <div className="grid" data-aos="fade-up" data-aos-delay="200">
                        <GuitarAmp className="i" />
                        <h3>Sales of Musical Instruments</h3>
                        <p>Offering a wide range of musical instruments for purchase, such as guitars, keyboards, drums, violins, and more.</p>
                    </div>
                    <div className="grid" data-aos="fade-up" data-aos-delay="300">
                        <HeadphoneAlt className="i" />
                        <h3>Accessories</h3>
                        <p>Providing a variety of musical accessories, including strings, picks, drumsticks, and cases.</p>
                    </div>
                    <div className="grid" data-aos="fade-up" data-aos-delay="400">
                        <MdConstruction className="i" />
                        <h3>Repair and Maintenance</h3>
                        <p>Offering instrument repair and maintenance services to keep instruments in top condition.</p>
                    </div>
                    <div className="grid" data-aos="fade-up" data-aos-delay="500">
                        <Music className="i" />
                        <h3>Sheet Music and Books</h3>
                        <p>Providing a selection of sheet music, songbooks, and instructional materials.</p>
                    </div>
                    <div className="grid" data-aos="fade-up" data-aos-delay="600">
                        <MdSupportAgent className="i" />
                        <h3>Technical Supports</h3>
                        <p>Assisting with technical issues related to instruments and equipment.</p>
                    </div>
                    <div className="grid"data-aos="fade-up" data-aos-delay="700">
                        <MdSettingsApplications className="i" />
                        <h3>Instrument Set-Up</h3>
                        <p>Helping customers set up and fine-tune their instruments and equipment for optimal performance.</p>
                    </div>
                    <div className="grid" data-aos="fade-up" data-aos-delay="800">
                        <MdFavorite className="i" />
                        <h3>Special Orders</h3>
                        <p>Providing a selection of sheet music, songbooks, and instructional materials.</p>
                    </div>
                    <div className="grid" data-aos="fade-up" data-aos-delay="900">
                        <MdCastForEducation className="i" />
                        <h3>Lessons and Classes</h3>
                        <p>Offering music lessons or classes for various instruments, often taught by experienced instructors.</p>
                    </div>

                </div>
            </div>




        </>
    );
};
export default Services;
