import React, { useState, useEffect } from "react";
import axios from "axios";
// ADD NEW CONTACT COMPONENT
import AddContact from "./AddContact";
// LOAD TABLE
import ContactTable from "./ContactTable";
import "./ContactList.scss";

function ContactList() {
    // initial state
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios
            .get("/api/people")
            .then(response => setContacts(response.data))
            .catch(err => console.log(err));
    }, []);

    const handleContactSubmit = e => {
        e.preventDefault();
        const { name, phone, venue, address, email, note } = e.target;

        const newContact = {
            id: Math.random() + 1,
            name: name.value,
            phone: phone.value,
            venue: venue.value,
            address: address.value,
            email: email.value,
            note: note.value
        };
        // console.log(newContact);
        // setContacts([newContact, ...contacts]);
        // insert api call to add a new contact to personal list
        // ask in class how to handle a form submit collecting all the data in react
    };

    // console.log("All contacts", contacts);
    return (
        <div className="contact-list">
            {/* adding new contacts */}
            <AddContact handleContactSubmit={handleContactSubmit} />
            {/* Reading from state */}
            <ContactTable contacts={contacts} />
        </div>
    );
}

export default ContactList;
