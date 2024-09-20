import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => (
    <div key={contact.id}>
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
      />
      <Link to={`/contact/${contact.id}`} state={{ contact: contact }}>
        <button className="ui button blue">View Details</button>
      </Link>
    </div>
  ));

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;