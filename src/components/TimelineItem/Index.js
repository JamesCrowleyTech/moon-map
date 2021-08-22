import React from "react";
import "./Index.css";

export default function TimelineItem({ image, title, description, style }) {
    return (
        <div className="timeline-item" style={style}>
            <div className="timeline-item-image-container">
                <img src={image} className="timeline-item-image" alt=""></img>
            </div>
            <div className="timeline-item-text">
                <h3 className="timeline-item-title">{title}</h3>
                <p className="timeline-item-description">{description}</p>
            </div>
        </div>
    );
}
