import React, { useEffect } from "react";
import "./Index.css";

export default function TimelineYear({ text, style, id }) {
    useEffect(function () {
        const el = document.getElementById(`timeline-year--${id}`);
        console.log(el);
        const observer = new IntersectionObserver(
            function (entries) {
                const [entry] = entries;
                setTimeout(function () {
                    if (
                        entry.isIntersecting &&
                        el.classList.contains("timeline-year--right-unscrolled")
                    ) {
                        el.classList.remove("timeline-year--right-unscrolled");
                        el.classList.add("timeline-year--right-scrolled");
                    }
                    if (
                        entry.isIntersecting &&
                        el.classList.contains("timeline-year--left-unscrolled")
                    ) {
                        el.classList.remove("timeline-year--left-unscrolled");
                        el.classList.add("timeline-year--left-scrolled");
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

    return (
        <h3
            className={`timeline-year ${
                id % 2
                    ? "timeline-year--left-unscrolled"
                    : "timeline-year--right-unscrolled"
            }`}
            id={`timeline-year--${id}`}
            style={style}
        >
            {text}
        </h3>
    );
}
