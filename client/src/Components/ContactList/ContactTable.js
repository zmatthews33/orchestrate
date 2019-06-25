import React from 'react'
import ContactRow from "./ContactRow";
export default function ContactTable({contacts}) {
    return (
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
                    notes={contact.notes}
                />
            ))}
        </tbody>
    </table>
    )
}
