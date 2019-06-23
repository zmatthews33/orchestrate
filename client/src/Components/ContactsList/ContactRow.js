import React from "react";

export default function ContactRow(props) {
  return (
    <tr>
      <td>{props.contact.name}</td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.venue}</td>
      <td>{props.contact.address}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.notes}</td>
    </tr>
  );
}
