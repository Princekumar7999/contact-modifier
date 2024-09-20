import React from "react";
import { Link, useLocation } from "react-router-dom";
import user1 from "../images/user1.png";

const ContactDetail = () => {
    const location = useLocation();
    
    // Check if location.state and contact exist to avoid undefined errors
    const contact = location.state?.contact;

    // If contact is undefined, render a fallback UI
    if (!contact) {
        return (
            <div className="main">
                <h2>No contact details available</h2>
                <Link to="/">
                    <button className="ui button blue centre">Back to contact list</button>
                </Link>
            </div>
        );
    }

    const { name, email } = contact; // Safely extract name and email

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user1} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="centre-div">
                <Link to="/">
                    <button className="ui button blue centre">Back to contact list</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;
