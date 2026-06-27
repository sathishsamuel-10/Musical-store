import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { Facebook, Instagram, Twitter, GuitarAmp, HeadphoneAlt, Spanner, Music,Group ,Piano} from '@boxicons/react';
import { MdBusinessCenter } from "react-icons/md";
MdBusinessCenter
const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    return (
        <>

            <section className="main">

                <section className="about">
                    <div className="imge" data-aos="fade-right" data-aos-delay="100">
                        <img src="./public/about.jpg"></img>
                    </div>

                    <div className="detail" data-aos="fade-up" data-aos-delay="100">
                        <h3>ABOUT US</h3>
                        <h1>Best Music Store in the City</h1>
                        <p>Rhythm is a prominent music store in Tamilnadu,
                            established in 1994 by Mr. David Thompson,
                            son of the notable musician Mr.
                            Thompson F.T.C.L., M.R.S.T. With over two decades of
                            experience, they pride themselves on offering
                            high-quality musical instruments at affordable prices.
                            They have a wide range of Indian and Western instruments in their inventory, including keyboards, guitars, violins, tablas, and more. Rhythm is an authorized dealer for renowned brands like Ashton, Casio, Korg, Roland, Sennheiser, and Yamaha. In addition to sales, they provide comprehensive servicing for various musical instruments, recognizing the importance of maintenance and repairs. With 30 years of expertise, Rhythm remains a trusted destination for musicians, aiming to assist in finding the perfect instrument, offering top-notch service, and contributing to Tamilnadu's vibrant music culture.</p>
                    </div>
                </section>
                <div className="point">
                    <div className="item" data-aos="fade-up" data-aos-delay="100">
                        <Group className="icon"></Group>
                         <span> <p>10000+</p></span>
                        <p>HAPPY CUSTOMERS</p>
                    </div>
                    <div className="item" data-aos="fade-up" data-aos-delay="200">
                        <MdBusinessCenter className="icon"></MdBusinessCenter>
                         <span> <p>30</p></span>
                        <p>Years in business</p>
                    </div>
                    <div className="item" data-aos="fade-up" data-aos-delay="300">
                        <Piano className="icon"></Piano>
                      <span> <p>2000+</p></span>
                        <p>Instruments and AccessoriesS</p>
                    </div>

                </div>

            </section>
        </>
    );
};
export default About; 