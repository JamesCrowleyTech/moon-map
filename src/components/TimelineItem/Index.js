import React, { useEffect } from "react";
import "./Index.css";

export default function TimelineItem({ image, title, description, style, id }) {
    let element = (
        <div
            className={`timeline-item ${
                id % 2
                    ? "timeline-item--right-unscrolled"
                    : "timeline-item--left-unscrolled"
            }`}
            style={style}
            id={`timeline-item--${id}`}
        >
            <div className="timeline-item-image-container">
                <img src={image} className="timeline-item-image" alt=""></img>
            </div>
            <div className="timeline-item-text">
                <h3 className="timeline-item-title">{title}</h3>
                <p className="timeline-item-description">{description}</p>
            </div>
        </div>
    );

    useEffect(function () {
        const el = document.getElementById(`timeline-item--${id}`);
        const observer = new IntersectionObserver(
            function (entries) {
                const [entry] = entries;
                setTimeout(function () {
                    if (
                        entry.isIntersecting &&
                        el.classList.contains("timeline-item--right-unscrolled")
                    ) {
                        el.classList.remove("timeline-item--right-unscrolled");
                        el.classList.add("timeline-item--right-scrolled");
                    }
                    if (
                        entry.isIntersecting &&
                        el.classList.contains("timeline-item--left-unscrolled")
                    ) {
                        el.classList.remove("timeline-item--left-unscrolled");
                        el.classList.add("timeline-item--left-scrolled");
                    }
                }, 0);
            },
            {
                root: null,
                threshold: 0,
                rootMargin: "0px",
            }
        );

        observer.observe(el);
    });

    return element;
}
