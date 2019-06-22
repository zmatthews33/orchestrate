import React from "react";
import ContactRow from "./ContactRow";

export class ContactTable extends React.Component {
  render() {
    var rows = [];
    this.props.contacts.forEach(contact => {
      if (contact.name.indexOf(this.props.filterText) === -1) {
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
}
