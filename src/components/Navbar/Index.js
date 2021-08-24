import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

export default function Index() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <Link to="/" className="navbar-list-item">
                    Home
                </Link>
                <Link
                    to="/map"
                    className="navbar-list-item navbar-list-item-danger"
                >
                    App
                </Link>
            </ul>
        </div>
    );
}
