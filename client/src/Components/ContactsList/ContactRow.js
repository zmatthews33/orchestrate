import React from "react";

export default function ContactRow() {
  return (
    <tr>
      <td>{this.props.contact.name}</td>
      <td>{this.props.contact.phone}</td>
      <td>{this.props.contact.venue}</td>
      <td>{this.props.contact.address}</td>
      <td>{this.props.contact.email}</td>
      <td>{this.props.contact.notes}</td>
    </tr>
  );
}
