import React from "react";
import "./Index.css";

export default function Index() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li className="navbar-list-item">Home</li>
                <li className="navbar-list-item navbar-list-item-danger">
                    App
                </li>
            </ul>
        </div>
    );
}
