import React, { useState } from "react";

// ADD NEW CONTACT COMPONENT
import AddContact from "./AddContact";
// LOAD TABLE
import ContactTable from "./ContactTable";
import "./ContactList.scss";

function ContactList() {
    // initial state
    const [contacts, setContacts] = useState([
        {
            key: 1,
            name: "Jane Doe",
            phone: "615-321-3340",
            venue: "Exit/In",
            address: "2208 Elliston Pl, Nashville, TN 37203",
            email: "janedoe@gmail.com",
            note: "She's cool"
        },
        {
            key: 2,
            name: "Tom",
            phone: "347-559-6031",
            venue: "The East Room",
            address: "2412 Gallatin Ave, Nashville, TN 37206",
            email: "tom@gmail.com",
            note: "Tom has a bday the night before our show"
        },
        {
            key: 3,
            name: "Sherlock",
            phone: "212-232-3234",
            venue: "n/a",
            address: "Everywhere",
            email: "holmes@sherlock.com",
            note: "pretty smart"
        }
    ]);

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
        console.log(newContact);
        setContacts([newContact, ...contacts]);
        // insert api call to add a new contact to personal list
        // ask in class how to handle a form submit collecting all the data in react
    };

    console.log("All contacts", contacts);
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
