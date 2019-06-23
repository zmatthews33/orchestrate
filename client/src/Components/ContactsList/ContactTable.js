import React from "react";

export default function ContactTable(props) {
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
      <tbody>{props.children}</tbody>
    </table>
  );
}
