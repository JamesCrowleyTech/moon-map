import React from "react";
import "./Index.css";
import TimelineItem from "../TimelineItem/Index";
import TimelineYear from "../TimelineYear/Index";
import image_moon from "../../images/moon-image.png";
import image_moon_impact from "../../images/moon-impact.jpg";
import image_luna_satellite from "../../images/luna-satellite.jpeg";
import image_men_on_moon from "../../images/men_on_moon.jpg";
import image_galileo_telescope from "../../images/galileo-telescope.jpg";
import image_apollo_17_crew from "../../images/apollo17_crew.jpg";

console.log(image_moon_impact);

export default function Timeline() {
    const timelineItemData = [
        {
            year: "4.5 billion years ago",
            title: "The Moon Is Formed",
            img: image_moon_impact,
            description:
                "The giant-impact hypothesis suggests that the Moon formed from the ejecta of a collision between the proto-Earth and a Mars-sized planet.",
        },
        {
            year: "1610",
            title: "Galileo Discovers Craters on Moon",
            img: image_galileo_telescope,
            description: `In 1610 Galileo published "Sidereus Nuncius". In it he detailed his improvements of the telescope and discovery of moon craters.`,
        },

        {
            year: "1966",
            title: "First Lunar Satellite",
            img: image_luna_satellite,
            description:
                "Luna 10 was a 1966 Soviet Luna program, robotic spacecraft mission, also called Lunik 10. It was the first artificial satellite of the Moon.",
        },
        {
            year: "1969",
            title: "First Man on the Moon",
            img: image_men_on_moon,
            description:
                "Commander Neil Armstrong and Buzz Aldrin formed the American crew that landed the Apollo 11 spaceflight on the Moon, July 20, 1969.",
        },
        {
            year: "1972",
            title: "Last Crewed Moon Mission",
            img: image_apollo_17_crew,
            description:
                "The Apollo 17 flight, captained by Gene Cernan, is the last flight in a half century to land humans on the moon. The Apollo program was shut down in 1975.",
        },
    ];

    const numberOfItems = 5;

    return (
        <section className="timeline">
            <h2 className="timeline-title">Timeline Of The Moon</h2>
            <div className="timeline-main">
                <div className="timeline-main-moons-container">
                    {Array.apply(null, Array(numberOfItems)).map(function (
                        _,
                        i
                    ) {
                        return (
                            <div
                                className="timeline-main-moon-container"
                                style={{
                                    top: `${10 + i * 20}rem`,
                                }}
                            >
                                <img
                                    className="timeline-main-moon"
                                    src={image_moon}
                                    alt=""
                                ></img>
                            </div>
                        );
                    })}
                </div>
                <div className="timeline-main-items-container">
                    {Array.apply(null, Array(numberOfItems)).map(function (
                        _,
                        i
                    ) {
                        const data = timelineItemData[i] || timelineItemData[0];

                        return (
                            <TimelineItem
                                image={data.img}
                                title={data.title}
                                description={data.description}
                                style={{
                                    top: `${13 + i * 20}rem`,
                                }}
                                id={i}
                            />
                        );
                    })}
                </div>
                <div className="timeline-main-years-container">
                    {Array.apply(null, Array(numberOfItems)).map(function (
                        _,
                        i
                    ) {
                        return (
                            <TimelineYear
                                text={timelineItemData[i]?.year}
                                style={{
                                    top: `${13 + i * 20}rem`,
                                }}
                                id={i}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
