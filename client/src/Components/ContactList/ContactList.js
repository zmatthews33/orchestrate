import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// ADD NEW CONTACT COMPONENT
import AddContact from "./AddContact";
// LOAD TABLE
import ContactTable from "./ContactTable";
import "./ContactList.scss";
import { AppContext } from "../../App";

function ContactList() {
    // initial state
    const [contacts, setContacts] = useState([]);

    const { userId } = useContext(AppContext);

    useEffect(() => {
        axios
            .get("/api/people")
            .then(response => setContacts(response.data))
            .catch(err => console.log(err));
    }, []);

    const handleContactSubmit = e => {
        e.preventDefault();
        console.log(e.target);
        const {
            first_name,
            last_name,
            phone,
            venue,
            address,
            email,
            note
        } = e.target;

        const newContact = {
            first_name: first_name.value,
            last_name: last_name.value,
            phone: phone.value,
            venue: venue.value,
            address: address.value,
            email: email.value,
            note: note.value,
            created_by: userId
        };
        console.log(newContact);
        // setContacts([newContact, ...contacts]);
        // insert api call to add a new contact to personal list
        axios
            .post("api/people", newContact)
            .then(response => setContacts([response.data, ...contacts]));
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
