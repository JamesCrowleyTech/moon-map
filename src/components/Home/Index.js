import React from "react";
import "./Index.css";

export default function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-image"></div>
                <div className="hero-text">
                    <h1 className="hero-title">Moon Map</h1>
                    <p className="hero-paragraph">
                        A moon visualization tool by James Crowley
                    </p>
                    <button type="button" className="hero-button">
                        Explore the Moon
                    </button>
                </div>
            </section>
        </div>
    );
}
