import React from "react";
import "./Index.css";
import TimelineItem from "../TimelineItem/Index";
import image_moon from "../../images/moon-image.png";
import image_moon_impact from "../../images/moon-impact.jpg";

export default function Timeline() {
    return (
        <section className="timeline">
            <h2 className="timeline-title">Timeline Of The Moon</h2>
            <div className="timeline-main">
                {Array.apply(null, Array(5)).map(function (_, i) {
                    return (
                        <>
                            <img
                                className="timeline-main-moon"
                                src={image_moon}
                                alt=""
                                style={{
                                    top: `${10 + i * 20}rem`,
                                }}
                            ></img>
                            <TimelineItem
                                image={image_moon_impact}
                                title="Test"
                                description="The giant-impact hypothesis, sometimes called the Big Splash, or the Theia Impact, suggests that the Moon formed from the ejecta of a collision between the proto-Earth and a Mars-sized planet."
                                style={{
                                    top: `${13 + i * 20}rem`,
                                }}
                                id={i}
                            />
                        </>
                    );
                })}
            </div>
        </section>
    );
}
