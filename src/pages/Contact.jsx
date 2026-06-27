import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    return (
        <section className="contact">
            <div className="contact-card" data-aos="fade-right">
                <img className="front-img" src="/music_bg.jpg" alt="Music background" />
            </div>

            <div className="content" data-aos="fade-up">
                <span className="label">Contact Us</span>
                <h2>Get your queries to us</h2>

                <form className="contact-form">
                    <div className="details">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="tel" name="phone" placeholder="Your Contact No." required />
                        <input type="email" name="email" placeholder="Enter Your Email" required />
                    </div>

                    <div className="message-row">
                        <textarea name="address" placeholder="Enter Your Address" required />
                        <textarea name="message" placeholder="Message" required />
                   <button class="sbt" type="submit">Submit</button>
                    </div>

                </form>
            </div>

            <div className="contact-card" data-aos="fade-left">
                <img className="front-img" src="/music_bg.jpg" alt="Music background" />
            </div>
        </section>
    );
};
export default Contact; 