import React from "react";

const ContactList = (props) => {
    console.log(props);
    const renderContactList = props.contacts.map
    return (
        <div className="ui called list">
            contact List
        </div>
    );
};
        
export default ContactList;