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
            notes: "She's cool"
        },
        {
            key: 2,
            name: "Tom",
            phone: "347-559-6031",
            venue: "The East Room",
            address: "2412 Gallatin Ave, Nashville, TN 37206",
            email: "tom@gmail.com",
            notes: "Tom has a bday the night before our show"
        },
        {
            key: 3,
            name: "Sherlock",
            phone: "212-232-3234",
            venue: "n/a",
            address: "Everywhere",
            email: "holmes@sherlock.com",
            notes: "pretty smart"
        }
    ]);
    
    console.log("All contacts", contacts);
    return (
        <div className="contact-list">
            {/* adding new contacts */}
            <AddContact />
            {/* Reading from state */}
            <ContactTable contacts={contacts} />
        </div>
    );
}

export default ContactList;
