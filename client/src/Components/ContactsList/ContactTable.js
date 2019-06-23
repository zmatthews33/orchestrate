import React from "react";
import ContactRow from "./ContactRow";

export default function ContactTable(props) {
    var rows = [];
    props.contacts.forEach(contact => {
      if (contact.name.indexOf(props.filterText) === -1) {
        return;
      }
      rows.push(<ContactRow key={contact.key} contact={contact} />);
    });
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>
            <i className="fa fa-fw fa-user" />
            Name
          </th>
          <th>
            <i className="fa fa-fw fa-phone" />
            Phone
          </th>
          <th>
            <i className="fa fa-fw fa-house-damage" />
            Venue
          </th>
          <th>
            <i className="fa fa-fw fa-map-pin" />
            Address
          </th>
          <th>
            <i className="fa fa-fw fa-envelope" />
            Email
          </th>
          <th>
            <i className="fa fa-fw fa-sticky-note" />
            Notes:
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
