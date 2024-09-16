import React from "react";
import {useNavigate} from "react-router-dom";

export const HeroBanner = () => {
    const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";
    const navigate = useNavigate();

    return (<div className="hero-banner hero-banner--pink-yellow">
        <div className="hero-banner__logo">
            <img className="hero-banner__image" src={logo} alt="React logo"/>
        </div>
        <h1 className="hero-banner__headline">Hello!</h1>
        <p className="hero-banner__description">
            Application to create a client events
        </p>
        <a
            id="code-sample-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
                navigate("/calendar");
            }}
            className="button button--secondary">
            Create new event
        </a>
        <p></p>
        <a
            id="code-sample-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
                navigate("/public");
            }}
            className="button button--secondary">
            Manage clients
        </a>
    </div>);
};
