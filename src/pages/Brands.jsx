import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Brands.css";
import data from "./data.json";

const Brands = () => {
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    const filteredItems =
        filter === "all" ? data : data.filter((item) => item.category === filter);

    const buttons = ["all", "Keyboard", "Guitar", "Violin", "Drums"];

    return (
        <div className="service">
            <h3 data-aos="fade-up" data-aos-delay="100">OUR BRANDS</h3>
            <h1 data-aos="fade-up" data-aos-delay="100">Most Popular Brands in the World</h1>

            <div className="buttons" data-aos="fade-up" data-aos-delay="150">
                {buttons.map((button) => (
                    <button
                        key={button}
                        className={filter === button ? "activate" : ""}
                        onClick={() => setFilter(button)}
                    >
                        {button}
                    </button>
                ))}
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="300">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div>
                                <h4>{item.title}</h4>
                              
                               
                            </div>
                        </div>
                    ))
                ) : (   
                    <p className="empty">No brands found for "{filter}".</p>
                )}
            </div>
        </div>
    );
};

export default Brands;
    