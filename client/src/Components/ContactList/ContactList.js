import React, { useState } from "react";
import "./ContactList.scss";
import ContactRow from "./ContactRow";

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
            name: "Lemmy",
            phone: "666-666-6666",
            venue: "n/a",
            address: "Everywhere",
            email: "lemmyisgod123@gmail.com",
            notes: "Lemmy is God"
        }
    ]);
    console.log("All contacts", contacts);
    return (
        <div className="contact-list">
            <table id="contacts">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Venue</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <ContactRow
                            key={contact.key}
                            name={contact.name}
                            phone={contact.phone}
                            venue={contact.venue}
                            address={contact.address}
                            email={contact.email}
                            notes={contact.email}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactList;
